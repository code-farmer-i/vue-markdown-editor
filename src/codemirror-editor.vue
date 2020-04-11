<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :height="height"
    :fullscreen="fullscreen"
    @toolbar-item-click="handleToolbarItemClick"
    @resize="handleContainerResize"
    ref="contaner"
  >
    <div
      class="codemirror-wrapper"
      slot="editor"
      ref="codemirrorEditor"
    />
    <scrollbar slot="preview">
      <v-md-preview
        :text="text"
        :theme="theme"
        @change="handleChange"
        ref="preview"
      />
    </scrollbar>
    <v-md-upload-img
      v-if="hasUploadImage"
      :upload-image-config="$attrs['upload-image-config'] || $attrs.uploadImageConfig"
      ref="uploadImage"
    />
  </v-md-container>
</template>

<script>
// mixins
import commonMixin from '@/mixins/common';
import vModelMixin from '@/mixins/v-model';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';
import uploadImageMixin from '@/mixins/upload-image';

import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

export default {
  name: 'v-md-editor',
  mixins: [
    commonMixin,
    vModelMixin,
    toolbarMixin,
    commandMixin,
    fullscreenMixin,
    uploadImageMixin,
  ],
  props: {
    codemirrorConfig: Object,
  },
  watch: {
    value() {
      if (this.value !== this.text) {
        this.text = this.value;
        this.codemirrorInstance.setValue(this.text);
      }
    },
  },
  mounted() {
    this.codemirrorInstance = new Codemirror(this.$refs.codemirrorEditor, {
      tabSize: 2,
      lineNumbers: true,
      styleActiveLine: true,
      ...this.codemirrorConfig,
      value: this.text,
      mode: 'markdown',
      lineWrapping: 'wrap',
      scrollbarStyle: 'overlay',
      dragDrop: false,
    });

    this.codemirrorInstance.on('change', () => {
      const newValue = this.getValue();

      this.handleInput(newValue);
    });
  },
  methods: {
    handleContainerResize() {
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
    replaceSelectionText(text) {
      this.codemirrorInstance.replaceSelection(text, 'around');
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
    getCurrentSelectedStr () {
      return this.codemirrorInstance.getSelection();
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  .codemirror-wrapper {
    height: 100%;

    .CodeMirror {
      height: 100%;
      color: #2c3e50;
      font-size: 16px;
      font-family: Menlo, 'Ubuntu Mono', Consolas, 'Courier New', 'Microsoft Yahei',
        'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;
      line-height: 1.5;

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
      }
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
      color: #2c3e50;
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
        background-color: rgba(144, 147, 153, 0.3);
        border-radius: 4px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.34s ease-out, background-color 0.3s;

        &:hover {
          background-color: rgba(144, 147, 153, 0.5);
        }
      }
    }

    .CodeMirror-overlayscroll-vertical {
      right: 2px;
    }
  }
}
</style>
