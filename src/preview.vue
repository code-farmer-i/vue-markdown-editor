<template>
  <div
    v-html="html"
    class="v-md-editor-preview"
    :class="[themeConfig.previewClass]"
    @click="handleClick"
  />
</template>

<script>
import xss from '@/utils/xss/index';
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
    scrollToMark: {
      type: Boolean,
      default: true,
    },
    getScrollContainer: {
      type: Function,
      default: () => document.documentElement,
    },
    markAttr: {
      type: String,
      default: 'data-v-md-anchor-mark',
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    anchorAttr: {
      type: String,
      default: 'data-v-md-anchor',
    },
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

      if (container === window) {
        container = target.ownerDocument.documentElement;

        return rect.top - container.clientTop;
      }

      return rect.top - container.getBoundingClientRect().top;
    },
    handleClick (e) {
      if (!this.scrollToMark) return;

      const { target } = e;
      const container = this.getScrollContainer();
      let scrollToTargetId = target.getAttribute(this.markAttr);

      if (scrollToTargetId) {
        scrollToTargetId = scrollToTargetId.split(' ')
          .map((str) => str.toLowerCase())
          .join('-');
        const scrollToTarget = document.querySelector(`[${this.anchorAttr}=${scrollToTargetId}]`);
        const offsetTop = this.getOffsetTop(scrollToTarget, container);
        const scrollTop = container.scrollTop + offsetTop;

        smoothScroll(container, scrollTop - this.offsetTop);
      }
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
