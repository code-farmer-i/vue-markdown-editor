<template>
  <div
    v-html="html"
    class="vue-markdown-editor__preview"
    :class="[previewClass]"
  />
</template>

<script>
import markdownItInstance from '@/utils/markdown-it';
import highlighjs from '@/utils/highlightjs';

markdownItInstance.set({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: false,
  typographer: true,
  highlight(str, lang) {
    let res = markdownItInstance.utils.escapeHtml(str);

    if (lang && highlighjs.getLanguage(lang)) {
      res = highlighjs.highlight(lang, str).value;
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

export default {
  name: 'markdown-preview',
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
      handler() {
        this.html = markdownItInstance.render(this.text);
      },
    },
  },
};
</script>

<style lang="scss">
.vue-markdown-editor {
  &__preview {
    padding: 20px;
  }
}
</style>
