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
    <div class="codemirror-wrapper" slot="editor" ref="monacoEditor" />
    <v-md-preview
      slot="preview"
      :text="text"
      :preview-class="previewClass"
      @change="handleChange"
      ref="preview"
    />
  </v-md-container>
</template>

<script>
import Preview from '@/components/preview';
import Container from '@/components/container';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';
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
  provide() {
    return {
      markdownEditor: this,
    };
  },
  components: {
    [Preview.name]: Preview,
    [Container.name]: Container,
  },
  mixins: [toolbarMixin, commandMixin, fullscreenMixin],
  props: {
    value: {
      type: String,
      default: '',
    },
    height: String,
    previewClass: String,
  },
  data() {
    return {
      text: this.value,
    };
  },
  watch: {
    value() {
      this.text = this.value;
      this.editorInstance.setValue(this.text);
    },
  },
  mounted() {
    this.editorInstance = new Codemirror(this.$refs.monacoEditor, {
      value: this.text,
      mode: 'markdown',
      tabSize: 2,
      lineWrapping: 'wrap',
      scrollbarStyle: 'overlay',
      lineNumbers: true,
      styleActiveLine: true,
      dragDrop: false,
    });
    console.log(this.editorInstance);

    this.editorInstance.on('change', () => {
      const newValue = this.getValue();

      this.handleInput(newValue);
    });
  },
  methods: {
    handleContainerResize() {
      // 容器大小变化的时候刷新 codemirror 解决滚动条的显示问题
      this.editorInstance.refresh();
    },
    getValue() {
      return this.editorInstance.getValue();
    },
    handleInput(val) {
      this.text = val;
      this.$emit('input', val);
    },
    handleChange(text, html) {
      this.$emit('change', text, html);
    },
    getSelectedTextRange(allText, insertText, selectedText, cursorEndIndex) {
      const selectedIndexOfStr = insertText.indexOf(selectedText);

      if (selectedIndexOfStr === -1) return;
      const text = allText.slice(0, cursorEndIndex);
      const insertTextIndex = text.length - insertText.length;
      const rangeStartIndex = insertTextIndex + selectedIndexOfStr;
      const rangeEndIndex = rangeStartIndex + selectedText.length;

      return { start: rangeStartIndex, end: rangeEndIndex };
    },
    getInsertText(prefix, suffix, currentSelectedStr, placeholder) {
      const text = currentSelectedStr && (prefix || suffix) ? currentSelectedStr : placeholder;

      return `${prefix}${text}${suffix}`;
    },
    getSelectedStr(text, selectedRange) {
      const { start, end } = selectedRange;

      return end > start ? text.slice(start, end) : null;
    },
    focus() {
      this.editorInstance.focus();
    },
    // Must implement
    save() {
      this.$emit('save', this.text, this.$refs.preview.html);
    },
    // Must implement
    undo() {
      this.editorInstance.undo();
    },
    // Must implement
    redo() {
      this.editorInstance.redo();
    },
    // Must implement
    clear() {
      this.editorInstance.setValue('');
    },
    // Must implement
    insertText({ prefix = '', suffix = '', placeholder, selected: defaultSelectedStr }) {
      const currentSelectedStr = this.editorInstance.getSelection();

      this.insert(this.text, currentSelectedStr, prefix, suffix, placeholder, defaultSelectedStr);
    },
    replaceSelectionText(text) {
      this.editorInstance.replaceSelection(text, 'around');
    },
    getlinesText(text) {
      return text.split('\n');
    },
    changeSelctionTo(selectedText) {
      const curStartLine = this.editorInstance.getCursor('from');
      const currentSelectedStr = this.editorInstance.getSelection();
      const startIndex = currentSelectedStr.indexOf(selectedText) + curStartLine.ch;
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
      currentSelectedStr.split('\n').find((rowText, lineIndex) => {
        const rowLength = rowText.length;

        [start, end].forEach((position) => {
          const newCursor = this.getIndexInInterval(
            position.indexOfSelected,
            strLen,
            strLen + rowLength
          );

          if (newCursor) {
            position.ch = newCursor;
            position.line = curStartLine + lineIndex;
          }
        });

        strLen += rowLength;

        return start.ch !== null && end.ch !== null;
      });

      this.editorInstance.setSelection(end, start);
    },
    getIndexInInterval(number, start, end) {
      if (start <= number && number <= end) {
        return number - start;
      }
    },
    insert(fullContent, currentSelectedStr, prefix, suffix, placeholder, defaultSelectedStr) {
      this.focus();

      const insertText = this.getInsertText(prefix, suffix, currentSelectedStr, placeholder);

      this.replaceSelectionText(insertText);

      this.$nextTick(() => {
        const selectedText =
          prefix || suffix ? currentSelectedStr || defaultSelectedStr : defaultSelectedStr;
        if (!selectedText) return;

        this.changeSelctionTo(selectedText);
      });
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
      font-size: 16px;
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
