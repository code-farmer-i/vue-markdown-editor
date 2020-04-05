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
      if (this.isFocus()) {
        document.execCommand('undo');
      }
    },
    redo() {
      if (this.isFocus()) {
        document.execCommand('redo');
      }
    },
    insertText({ prefix = '', subfix = '', placeholder, selected }) {
      if (!this.isFocus()) return;

      const currentSelected = this.getSelected();
      const insertText = this.getInsertText(
        prefix,
        subfix,
        currentSelected,
        placeholder
      );

      document.execCommand('insertText', false, insertText);

      const newRange = this.getSelectedTextRange(
        this.value,
        insertText,
        prefix || subfix ? currentSelected || selected : selected,
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
    getInsertText(prefix, subfix, currentSelected, placeholder) {
      const text =
        currentSelected && (prefix || subfix) ? currentSelected : placeholder;

      return `${prefix}${text}${subfix}`;
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
    isFocus() {
      return window.getSelection().anchorNode === this.$el;
    },
    focus() {
      const { textarea } = this.$refs;

      textarea.focus();

      // if (window.getSelection) {
      //   textarea.focus();

      //   const range = window.getSelection();

      //   range.selectAllChildren(textarea);
      //   range.collapseToEnd();
      // } else if (document.selection) {
      //   const range = document.selection.createRange();

      //   range.moveToElementText(textarea);
      //   range.collapse(false);
      //   range.select();
      // }
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
