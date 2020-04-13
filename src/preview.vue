<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[themeConfig.previewClass]"
  />
</template>

<script>
const defaultMarkdownLoader = (text) => text;

const component = {
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
      return { ...this.$options.themeConfig, ...this.theme };
    },
    markdownParser () {
      return this.themeConfig.markdownParser;
    },
    markdownLoader () {
      return this.markdownParser?.render.bind(this.markdownParser) || defaultMarkdownLoader;
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
      console.warn('Please configure your markdown parser');
    } else {
      this.$options.markdownExtenders.forEach(extender => {
        extender(this.markdownParser);
      });
    }
  },
};

component.theme = function(themeConfig) {
  component.themeConfig = themeConfig;
};

component.markdownExtenders = [];
component.extendMarkdown = function (extend) {
  component.markdownExtenders.push(extend);
};

export default component;
</script>

<style lang="scss">
.v-md-editor-preview {
  padding: 20px;
  word-break: break-all;
}
</style>
