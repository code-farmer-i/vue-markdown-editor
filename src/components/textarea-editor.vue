<template>
  <div class="v-md-textarea-editor">
    <pre :style="{ minHeight }"><section
  v-for="(row, idx) in modelValue.split('\n')"
  :data-line="idx + 1"
>{{ row || ' ' }}<br></section></pre>
    <textarea
      ref="textarea"
      :value="modelValue"
      :placeholder="placeholder"
      spellcheck="false"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @click="updateCurrentHistoryRange"
      @paste="handlePaste"
      @blur="handleBlur"
      @keydown.tab.prevent
      @keydown.ctrl.z.prevent.exact="undo"
      @keydown.meta.z.prevent.exact="undo"
      @keydown.ctrl.y.prevent.exact="redo"
      @keydown.meta.y.prevent.exact="redo"
      @keyup.shift.up.exact="updateCurrentHistoryRange"
      @keyup.shift.down.exact="updateCurrentHistoryRange"
      @keyup.shift.left.exact="updateCurrentHistoryRange"
      @keyup.shift.right.exact="updateCurrentHistoryRange"
    />
  </div>
</template>

<script>
import insertTextAtCursor from 'insert-text-at-cursor';
import HotKeys from '@/utils/hotkeys';

import { isKorean } from '@/utils/util';

export default {
  name: 'v-md-textarea-editor',
  props: {
    modelValue: String,
    minHeight: String,
    placeholder: String,
    historyDebounce: {
      type: Number,
      default: 400,
    },
    historyMax: {
      type: Number,
      default: 30,
    },
  },
  emits: ['blur', 'paste', 'update:modelValue'],
  data() {
    return {
      isComposing: false,
    };
  },
  computed: {
    textareaEl() {
      return this.$refs.textarea;
    },
  },
  watch: {
    modelValue() {
      this.clearTimeout();

      if (!this.triggerInputBySetHistory) {
        this.timmer = setTimeout(() => {
          this.saveHistory();

          this.clearTimeout();
        }, this.historyDebounce);
      }
    },
  },
  created() {
    this.historyStack = [];
    this.historyIndex = 0;
    this.hotkeysManager = new HotKeys();
  },
  mounted() {
    this.saveHistory();

    this.textareaEl.addEventListener('keydown', this.handleKeydown, false);
  },
  beforeUnmount() {
    this.textareaEl.removeEventListener('keydown', this.handleKeydown, false);
  },
  methods: {
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate(event) {
      const text = event.target.value;
      const lastCharacter = text[text.length - 1] || '';
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handlePaste(e) {
      this.$emit('paste', e);
    },
    handleBlur(e) {
      this.$emit('blur', e);
    },
    registerHotkeys(...arg) {
      this.hotkeysManager.registerHotkeys(...arg);
    },
    handleKeydown(e) {
      this.hotkeysManager.dispatch(e);
    },
    heightAtLine(lineIndex) {
      const el = this.$el.querySelector(`section[data-line="${lineIndex}"]`);

      return el ? el.offsetTop + el.offsetHeight : 0;
    },
    clearTimeout() {
      if (this.timmer) clearTimeout(this.timmer);

      this.timmer = null;
    },
    updateCurrentHistoryRange() {
      if (!this.timmer) {
        this.updateHistory(this.historyIndex, {
          range: this.getRange(),
        });
      }
    },
    handleInput(e) {
      if (this.isComposing) return;

      this.$emit('update:modelValue', e.target.value);
    },
    saveHistory() {
      const range = this.getRange();
      const history = {
        value: this.modelValue,
        range,
      };

      this.historyStack = this.historyStack.slice(0, this.historyIndex + 1);
      this.historyStack.push(history);
      if (this.historyStack.length > this.historyMax) this.historyStack.shift();
      this.historyIndex = this.historyStack.length - 1;
    },
    updateHistory(index, data) {
      const history = this.historyStack[index];

      if ('value' in data) history.value = data.value;
      Object.assign(history.range, data.range);
    },
    goHistory(index) {
      const { value, range } = this.historyStack[index];

      this.$emit('update:modelValue', value);
      this.triggerInputBySetHistory = true;

      this.$nextTick(() => {
        this.triggerInputBySetHistory = false;
        this.setRange(range);
      });
    },
    getRange() {
      return {
        start: this.textareaEl.selectionStart,
        end: this.textareaEl.selectionEnd,
      };
    },
    setRange({ start, end }) {
      this.textareaEl.setSelectionRange(start, end);
      this.updateCurrentHistoryRange();
    },
    focus() {
      this.textareaEl.focus();
    },
    insertText(text) {
      insertTextAtCursor(this.textareaEl, text);
    },
    undo() {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.goHistory(this.historyIndex);
      }
    },
    redo() {
      if (this.historyIndex < this.historyStack.length - 1) {
        this.historyIndex++;
        this.goHistory(this.historyIndex);
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

@mixin common {
  box-sizing: border-box;
  padding: 20px 20px 30px;
  overflow: hidden;
  color: $text-color;
  font-size: $editor-font-size;
  font-family: $editor-font-family;
  line-height: $editor-line-height;
  word-break: break-all;
}

.v-md-textarea-editor {
  position: relative;

  pre {
    margin: 0;
    white-space: pre-wrap;
    visibility: hidden;
    @include common;
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    @include common;

    &::placeholder {
      color: $text-color-placeholder;
    }
  }
}
</style>
