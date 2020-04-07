<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :height="height"
    :fullscreen="fullscreen"
    @toolbar-item-click="handleToolbarItemClick"
    ref="contaner"
  >
    <div
      class="codemirror-wrapper"
      slot="editor"
      ref="monacoEditor"
    />
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
import 'codemirror/mode/markdown/markdown';
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
      lineNumbers: true,
      mode: 'markdown',
    });

    this.editorInstance.on('change', () => {
      const newValue = this.getValue();

      this.handleInput(newValue);
    });
  },
  methods: {
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
    getSelectedStr() {
      const { start, end } = this.$refs.editorEgine.getRange();

      return end > start ? this.text.slice(start, end) : null;
    },
    focus() {
      this.$refs.editorEgine.focus();
    },
    // Must implement
    save() {
      this.$emit('save', this.text, this.$refs.preview.html);
    },
    // Must implement
    undo() {
      this.focus();

      document.execCommand('undo');
    },
    // Must implement
    redo() {
      this.focus();

      document.execCommand('redo');
    },
    // Must implement
    clear() {
      this.focus();

      this.handleInput('');
    },
    // Must implement
    insertText({ prefix = '', suffix = '', placeholder, selected }) {
      this.focus();

      const currentSelectedStr = this.getSelectedStr();
      const insertText = this.getInsertText(prefix, suffix, currentSelectedStr, placeholder);

      document.execCommand('insertText', false, insertText);

      this.$nextTick(() => {
        const { editorEgine } = this.$refs;
        const newRange = this.getSelectedTextRange(
          this.text,
          insertText,
          prefix || suffix ? currentSelectedStr || selected : selected,
          editorEgine.getRange().end
        );

        editorEgine.setRange(newRange);
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
    }
  }
}
</style>
