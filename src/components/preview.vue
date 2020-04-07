<template>
  <scrollbar>
    <div
      v-html="html"
      class="vue-markdown-editor__preview"
      :class="[previewClass]"
    />
  </scrollbar>
</template>

<script>
import markdownItInstance from '@/utils/markdown-it';
import highlighjs from '@/utils/highlightjs';
import Scrollbar from '@/components/scrollbar/index';

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
  name: 'v-md-preview',
  components: {
    [Scrollbar.name]: Scrollbar,
  },
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
        this.$emit('change', this.text, this.html);
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
