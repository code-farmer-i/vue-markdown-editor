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
      ref="monacoEditor"
    />
    <scrollbar slot="preview">
      <v-md-preview
        :text="text"
        :preview-class="previewClass"
        @change="handleChange"
        ref="preview"
      />
    </scrollbar>
  </v-md-container>
</template>

<script>
import Preview from '@/preview';
import Container from '@/components/container';
import Scrollbar from '@/components/scrollbar/index';

import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';
import insertMixin from '@/mixins/insert';
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
    [Scrollbar.name]: Scrollbar,
  },
  mixins: [toolbarMixin, commandMixin, fullscreenMixin, insertMixin],
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
    getIndexInInterval(number, start, end) {
      if (start <= number && number <= end) {
        return number - start;
      }
    },
    // Must implement
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
    replaceSelectionText(text) {
      this.editorInstance.replaceSelection(text, 'around');
    },
    // Must implement
    changeSelctionTo(insertText, selectedText) {
      const curStartLine = this.editorInstance.getCursor('from');
      const curEndLine = this.editorInstance.getCursor('to');
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

        strLen += rowLength;

        return start.ch !== null && end.ch !== null;
      });

      this.editorInstance.setSelection(end, start);
    },
    // Must implement
    getCurrentSelectedStr () {
      return this.editorInstance.getSelection();
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
