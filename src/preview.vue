<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[themeConfig.previewClass]"
  />
</template>

<script>
import xss from '@/utils/xss/index';
import { getScrollTop } from '@/utils/scroll-top';
import smoothScroll from '@/utils/smooth-scroll';

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
      return this.theme || component.themeConfig || {};
    },
    markdownParser () {
      return this.themeConfig.markdownParser;
    },
    markdownLoader () {
      return this.markdownParser?.render.bind(this.markdownParser) || defaultMarkdownLoader;
    },
  },
  watch: {
    text () {
      this.handleTextChange();
    },
  },
  created () {
    if (typeof this.markdownLoader !== 'function' || this.markdownLoader === defaultMarkdownLoader) {
      console.warn('Please configure your markdown parser');
    } else {
      const markdownExtenders = [...(this.theme?.markdownExtenders || []), ...component.markdownExtenders];

      markdownExtenders.forEach(extender => {
        extender(this.markdownParser);
      });
    }

    this.handleTextChange();
  },
  methods: {
    getOffsetTop (target, container) {
      const rect = target.getBoundingClientRect();

      if (container === window || container === document.documentElement) {
        return rect.top;
      }

      return rect.top - container.getBoundingClientRect().top;
    },
    scrollToTarget ({ target, scrollContainer, top = 0, onScrollEnd }) {
      const offsetTop = this.getOffsetTop(target, scrollContainer);
      const scrollTop = getScrollTop(scrollContainer) + offsetTop - top;

      smoothScroll({
        scrollTarget: scrollContainer,
        scrollToTop: scrollTop,
        onScrollEnd,
      });
    },
    handleTextChange () {
      this.html = xss.process(this.markdownLoader(this.text));

      this.$emit('change', this.text, this.html);
    },
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
