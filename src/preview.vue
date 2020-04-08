<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[previewClass]"
  />
</template>

<script>
import markdownItInstance from '@/utils/markdown-it';

markdownItInstance.set({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: false,
  typographer: true,

});

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
        this.html = markdownItInstance.render(this.text);

        if (typeof oldVal !== 'undefined') { this.$emit('change', this.text, this.html); }
      },
    },
  },
};
</script>

<style lang="scss">
.v-md-editor-preview {
  padding: 20px;
}
</style>
