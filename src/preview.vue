<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[themeConfig.previewClass]"
  />
</template>

<script>
// util
import { getGlobal } from '@/utils/global';

const defaultMarkdownLoader = (text) => text;

export default {
  name: 'v-md-preview',
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
  },
  data() {
    return {
      html: '',
    };
  },
  computed: {
    themeConfig() {
      return { ...getGlobal('theme'), ...this.theme };
    },
    markdownLoader () {
      return this.themeConfig.markdownLoader || defaultMarkdownLoader;
    },
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
    if (typeof this.markdownLoader !== 'function' || this.markdownLoader === defaultMarkdownLoader) {
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
