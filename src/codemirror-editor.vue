<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :disabled-menus="disabledMenus"
    :height="height"
    :fullscreen="fullscreen"
    :left-area-visible="tocVisible"
    :left-area-title="langConfig.toc.title"
    :left-area-reverse="tocNavPositionRight"
    :mode="currentMode"
    @toolbar-item-click="handleToolbarItemClick"
    @toolbar-menu-click="handleToolbarMenuClick"
    @resize="handleContainerResize"
    ref="contaner"
  >
    <template
      v-for="slotName in proxySlots"
      #[slotName]="scope"
    >
      <slot
        :name="slotName"
        v-bind="scope"
      />
    </template>
    <template #left-area>
      <scrollbar>
        <toc-nav
          :titles="titles"
          @nav-click="handleNavClick"
        />
      </scrollbar>
    </template>
    <template #editor>
      <div
        class="codemirror-wrapper"
        :class="{
          'codemirror-reset': codemirrorStyleReset
        }"
        ref="codemirrorEditor"
      />
    </template>
    <template #preview>
      <scrollbar ref="previewScroller">
        <v-md-preview
          :text="text"
          :tab-size="tabSize"
          :scroll-container="getPreviewScrollContainer"
          :before-change="beforePreviewChange"
          @change="handleChange"
          @image-click="handlePreviewImageClick"
          ref="preview"
        />
      </scrollbar>
    </template>
    <v-md-upload-file
      v-if="hasUploadImage"
      :upload-config="uploadConfig"
      ref="uploadFile"
    />
  </v-md-container>
</template>

<script>
import createEditor from './create-editor';
import { smooth } from '@/utils/smooth-scroll';
import HotKeys from '@/utils/hotkeys';

const component = {
  props: {
    codemirrorConfig: Object,
    codemirrorStyleReset: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    modelValue() {
      if (this.modelValue !== this.text) {
        this.text = this.modelValue;
        this.codemirrorInstance.setValue(this.text);
      }
    },
  },
  created() {
    this.hotkeysManager = new HotKeys();
  },
  computed: {
    Codemirror() {
      return this.$options.Codemirror;
    },
  },
  mounted() {
    if (!this.Codemirror) {
      return console.error(
        '1.5.0与2.1.0版本之后Codemirror将由用户自己配置，请配置Codemirror，如何配置请参考相关文档'
      );
    }

    this.codemirrorInstance = new this.Codemirror(this.$refs.codemirrorEditor, {
      lineNumbers: true,
      styleActiveLine: true,
      autoCloseTags: true,
      matchBrackets: true,
      indentWithTabs: true,
      autoCloseBrackets: true,
      tabSize: this.tabSize,
      indentUnit: this.tabSize,
      value: this.text,
      placeholder: this.placeholder,
      mode: 'markdown',
      lineWrapping: true,
      scrollbarStyle: 'overlay',
      ...this.codemirrorConfig,
    });

    this.codemirrorInstance.on('change', () => {
      const newValue = this.getValue();

      this.handleInput(newValue);
    });

    this.codemirrorInstance.on('scroll', () => {
      this.handleEditorScroll();
    });

    this.codemirrorInstance.on('keydown', (_, e) => {
      this.hotkeysManager.dispatch(e);
    });

    this.codemirrorInstance.on('drop', (_, e) => {
      this.handleDrop(e);
    });

    this.codemirrorInstance.on('paste', (_, e) => {
      this.handlePaste(e);
    });

    this.codemirrorInstance.on('blur', (_, e) => {
      this.handleBlur(e);
    });
  },
  beforeUnmount() {
    const element = this.codemirrorInstance.doc.cm.getWrapperElement();

    element?.remove?.();
  },
  methods: {
    handleContainerResize() {
      if (!this.Codemirror) return;
      // 容器大小变化的时候刷新 codemirror 解决滚动条的显示问题
      this.codemirrorInstance.refresh();
    },
    getValue() {
      return this.codemirrorInstance.getValue();
    },
    getIndexInInterval(number, start, end) {
      if (start <= number && number <= end) {
        return number - start;
      }
    },
    // Must implement
    delLineLeft() {
      this.codemirrorInstance.execCommand('delLineLeft');
    },
    // Must implement
    getCursorLineLeftText() {
      const { codemirrorInstance } = this;
      const { line: startLine, ch: startCh } = codemirrorInstance.getCursor('from');
      const { line: endLine, ch: endCh } = codemirrorInstance.getCursor('to');

      if (startLine !== endLine || startCh !== endCh) return;

      return codemirrorInstance.getLine(startLine).slice(0, startCh);
    },
    // Must implement
    editorRegisterHotkeys(...arg) {
      this.hotkeysManager.registerHotkeys(...arg);
    },
    // Must implement
    editorScrollToTop(scrollTop) {
      const currentScrollTop = this.getScrollInfo().top;

      smooth({
        currentScrollTop,
        scrollToTop: scrollTop,
        scrollFn: (scrollTop) => this.codemirrorInstance.scrollTo(0, scrollTop),
      });
    },
    // Must implement
    getScrollInfo() {
      return this.codemirrorInstance.getScrollInfo();
    },
    // Must implement
    heightAtLine(...arg) {
      return this.codemirrorInstance.heightAtLine(...arg);
    },
    // Must implement
    focus() {
      this.codemirrorInstance.focus();
    },
    // Must implement
    undo() {
      this.codemirrorInstance.undo();
    },
    // Must implement
    redo() {
      this.codemirrorInstance.redo();
    },
    // Must implement
    clear() {
      this.codemirrorInstance.setValue('');
    },
    // Must implement
    editorFocusEnd() {
      this.focus();

      const lastLineIndex = this.codemirrorInstance.lastLine();
      const lastLineContent = this.codemirrorInstance.getLine(lastLineIndex);

      this.codemirrorInstance.setCursor({ line: lastLineIndex, ch: lastLineContent.length });
    },
    // Must implement
    replaceSelectionText(text, type = 'around') {
      this.codemirrorInstance.replaceSelection(text, type);
    },
    // Must implement
    changeSelctionTo(insertText, selectedText) {
      const curStartLine = this.codemirrorInstance.getCursor('from');
      const curEndLine = this.codemirrorInstance.getCursor('to');

      if (!selectedText) {
        this.codemirrorInstance.setSelection(curEndLine);
        return;
      }

      const lines = this.text.split('\n').slice(curStartLine.line, curEndLine.line + 1);
      const startIndex = lines.join('\n').indexOf(selectedText, curStartLine.ch);
      const endIndex = startIndex + selectedText.length;

      const start = {
        line: 0,
        ch: null,
        indexOfSelected: startIndex,
      };
      const end = {
        line: 0,
        ch: null,
        indexOfSelected: endIndex,
      };

      let strLen = 0;
      lines.find((rowText, lineIndex) => {
        const rowLength = rowText.length;

        [start, end].forEach((position) => {
          const newCursor = this.getIndexInInterval(
            position.indexOfSelected,
            strLen,
            strLen + rowLength
          );

          if (typeof newCursor !== 'undefined') {
            position.ch = newCursor;
            position.line = curStartLine.line + lineIndex;
          }
        });

        // + 1 是算上换行符占的长度
        strLen += rowLength + 1;

        return start.ch !== null && end.ch !== null;
      });

      this.codemirrorInstance.setSelection(end, start);
    },
    // Must implement
    getCurrentSelectedStr() {
      return this.codemirrorInstance.getSelection();
    },
  },
};

createEditor(component);

export default component;
</script>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  .codemirror-wrapper {
    height: 100%;

    .CodeMirror {
      height: 100%;
    }

    &.codemirror-reset {
      .CodeMirror {
        color: $text-color;
        font-size: $editor-font-size;
        font-family: $editor-font-family;
        line-height: $editor-line-height;

        &:hover {
          .CodeMirror-overlayscroll-vertical,
          .CodeMirror-overlayscroll-horizontal {
            & > div {
              opacity: 1;
            }
          }
        }

        pre {
          padding: 0 12px;
          word-break: break-all;
        }
      }

      .CodeMirror-empty {
        color: $text-color-placeholder;
      }

      .cm-header,
      .cm-url,
      .cm-link {
        color: #1890ff;
      }

      .cm-link {
        text-decoration: none;
      }

      .cm-url {
        text-decoration: underline;
      }

      .cm-quote,
      .cm-comment,
      .cm-variable-2:not(.cm-url),
      .cm-link {
        color: $text-color;
      }

      // 选中代码的高亮背景色
      .CodeMirror-selected {
        background: mix(#e8f2ff, #000, 90%);
      }

      .CodeMirror-linenumbers {
        padding: 0 5px;
      }

      // 滚动条样式
      .CodeMirror-overlayscroll-vertical,
      .CodeMirror-overlayscroll-horizontal {
        & > div {
          background-color: $scrollbar-background-color;
          border-radius: $scrollbar-border-radius;
          cursor: pointer;
          opacity: 0;
          transition: opacity $scrollbar-opacity-transition,
            background-color $scrollbar-background-transition;

          &:hover {
            background-color: $scrollbar-active-background-color;
          }
        }
      }

      .CodeMirror-overlayscroll-vertical {
        right: 2px;
      }
    }
  }
}
</style>
