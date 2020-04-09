<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[previewClass]"
  />
</template>

<script>
const defaultMarkdownLoader = (text) => text;

export default {
  name: 'v-md-preview',
  props: {
    text: {
      type: String,
      default: '',
    },
    previewClass: {
      type: String,
      default: 'markdown-body',
    },
    markdownLoader: {
      type: Function,
      default: defaultMarkdownLoader,
    },
  },
  data() {
    return {
      html: '',
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newVal, oldVal) {
        this.html = this.markdownLoader(this.text);

        if (typeof oldVal !== 'undefined') { this.$emit('change', this.text, this.html); }
      },
    },
  },
  created () {
    if (this.markdownLoader === defaultMarkdownLoader) {
      console.warn('Please configure your markdown loader');
    }
  },
};
</script>

<style lang="scss">
.v-md-editor-preview {
  padding: 20px;
}
</style>
