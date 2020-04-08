<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :height="height"
    :fullscreen="fullscreen"
    @editor-wrapper-click="handleEditorWrapperClick"
    @toolbar-item-click="handleToolbarItemClick"
    ref="contaner"
  >
    <v-md-engine slot="editor" :value="text" @input="handleInput" ref="editorEgine" />
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
import Engine from '@/components/engine';
import Preview from '@/components/preview';
import Container from '@/components/container';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';

export default {
  name: 'v-md-editor',
  provide() {
    return {
      markdownEditor: this,
    };
  },
  components: {
    [Engine.name]: Engine,
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
    },
  },
  methods: {
    handleInput(val) {
      this.text = val;
      this.$emit('input', val);
    },
    handleChange(text, html) {
      this.$emit('change', text, html);
    },
    handleEditorWrapperClick() {
      this.focus();
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

      const currentSelectedStr = this.getSelectedStr(this.text, this.$refs.editorEgine.getRange());
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
