<template>
  <div class="v-md-textarea-autosize">
    <pre>{{ value || ' ' }}</pre>
    <textarea
      ref="textarea"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'textarea-autosize',
  props: {
    value: String,
  },
  methods: {
    focus() {
      this.$refs.textarea.focus();
    },
  },
};
</script>

<style lang="scss">
.v-md-textarea-autosize {
  position: relative;

  pre {
    display: block;
    box-sizing: border-box;
    margin: 0;
    padding: 20px 20px 30px;
    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    visibility: hidden;
  }

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 20px 30px;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.5;
    border: none;
    outline: none;
    resize: none;
  }
}
</style>
