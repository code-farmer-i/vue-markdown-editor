<template>
  <div class="v-md-textarea-editor">
    <pre>{{ value || ' ' }}</pre>
    <textarea
      ref="textarea"
      :value="value"
      spellcheck="false"
      @keydown.tab.prevent
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'v-md-textarea-editor',
  props: {
    value: String,
  },
  computed: {
    textareaEl () {
      return this.$refs.textarea;
    },
  },
  methods: {
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
    execCommand (name, ...arg) {
      this.focus();

      document.execCommand(name, false, ...arg);
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
}

.v-md-textarea-editor {
  position: relative;

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
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
