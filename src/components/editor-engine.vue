<template>
  <textarea-autosize
    v-model="value"
    class="editor-engine"
    spellcheck="false"
    @click.stop
    ref="textarea"
  />
</template>

<script>
import Textarea from '@/components/textarea';

export default {
  name: 'editor-engine',
  components: {
    [Textarea.name]: Textarea,
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    textareaEl() {
      return this.$refs.textarea.$refs.textarea;
    },
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
  mounted() {
    this.focus();
  },
  methods: {
    undo() {
      this.focus();

      document.execCommand('undo');
    },
    redo() {
      this.focus();

      document.execCommand('redo');
    },
    clear() {
      this.focus();

      this.value = '';
    },
    insertText({ prefix = '', suffix = '', placeholder, selected }) {
      this.focus();

      const currentSelected = this.getSelected();
      const insertText = this.getInsertText(
        prefix,
        suffix,
        currentSelected,
        placeholder
      );

      document.execCommand('insertText', false, insertText);

      const newRange = this.getSelectedTextRange(
        this.value,
        insertText,
        prefix || suffix ? currentSelected || selected : selected,
        this.getRange().end
      );

      this.setRange(newRange);
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
    getInsertText(prefix, suffix, currentSelected, placeholder) {
      const text =
        currentSelected && (prefix || suffix) ? currentSelected : placeholder;

      return `${prefix}${text}${suffix}`;
    },
    getSelected() {
      const { start, end } = this.getRange();

      return end > start ? this.value.slice(start, end) : null;
    },
    getRange() {
      return {
        start: this.textareaEl.selectionStart,
        end: this.textareaEl.selectionEnd,
      };
    },
    setRange({ start, end }) {
      this.textareaEl.setSelectionRange(start, end);
    },
    focus() {
      const { textarea } = this.$refs;

      textarea.focus();
    },
  },
};
</script>

<style lang="scss">
.vue-markdown-editor {
  .editor-engine {
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
