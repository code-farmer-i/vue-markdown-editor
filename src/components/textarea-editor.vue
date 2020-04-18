<template>
  <div class="v-md-textarea-editor">
    <pre><br />{{ value }}</pre>
    <textarea
      ref="textarea"
      :value="value"
      spellcheck="false"
      @keydown.tab.prevent
      @compositionstart="() => ignoreInput = true"
      @compositionend="() => ignoreInput = false"
      @input="$emit('input', $event.target.value)"
      @keydown.ctrl.z.prevent.exact="undo"
      @keydown.meta.z.prevent.exact="undo"
      @keydown.ctrl.y.prevent.exact="redo"
      @keydown.meta.y.prevent.exact="redo"
    />
  </div>
</template>

<script>
import insertTextAtCursor from 'insert-text-at-cursor';
import Vue from 'vue';

Vue.config.keyCodes.z = 90;
Vue.config.keyCodes.y = 89;

export default {
  name: 'v-md-textarea-editor',
  props: {
    value: String,
    historyDebounce: {
      type: Number,
      default: 500,
    },
    historyMax: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    textareaEl () {
      return this.$refs.textarea;
    },
  },
  watch: {
    value () {
      if (this.timmer) clearTimeout(this.timmer);

      if (!this.triggerInputBySetHistory) {
        this.timmer = setTimeout(() => {
          if (!this.ignoreInput) this.saveHistory();
        }, this.historyDebounce);
      }
    },
  },
  created () {
    this.historyStack = [];
    this.historyIndex = 0;
  },
  mounted () {
    this.saveHistory();
  },
  methods: {
    saveHistory () {
      const range = this.getRange();
      const history = {
        value: this.value,
        range,
      };

      this.historyStack = this.historyStack.slice(0, this.historyIndex + 1);
      this.historyStack.push(history);
      if (this.historyStack.length > this.historyMax) this.historyStack.shift();
      this.historyIndex = this.historyStack.length - 1;
    },
    goHistory (index) {
      const { value, range } = this.historyStack[index];

      this.$emit('input', value);
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
    },
    focus() {
      this.textareaEl.focus();
    },
    insertText (text) {
      insertTextAtCursor(this.$refs.textarea, text);
    },
    undo () {
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
  }
}
</style>
