<template>
  <div
    class="v-md-editor-preview"
    :class="[previewClass]"
    @click="handlePreviewClick"
  >
    <div v-html="html" />
    <v-md-image-preview
      v-if="previewSrc"
      :src="previewSrc"
      :on-close="handleClosePreview"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import xss from '@/utils/xss/index';
import { getScrollTop } from '@/utils/scroll-top';
import smoothScroll from '@/utils/smooth-scroll';
import { LINE_MARKUP, HEADING_MARKUP, ANCHOR_MARKUP } from '@/utils/constants/markup';
import ImagePreview from '@/components/image-preview';
import { VMdParser } from '@/utils/v-md-parser';

const component = {
  name: 'v-md-preview',
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
    scrollContainer: {
      type: Function,
      default: () => window,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  components: {
    [ImagePreview.name]: ImagePreview,
  },
  emits: ['change'],
  data() {
    return {
      html: '',
      previewSrc: '',
    };
  },
  watch: {
    text() {
      this.handleTextChange();
    },
    langConfig() {
      this.handleTextChange();
    },
  },
  computed: {
    vMdParser() {
      return this.$options.vMdParser;
    },
    previewClass() {
      return this.vMdParser.themeConfig.previewClass;
    },
    langConfig() {
      return this.vMdParser.lang.langConfig;
    },
  },
  created() {
    this.handleTextChange();
  },
  methods: {
    handleClosePreview() {
      this.previewSrc = '';
    },
    handlePreviewClick(e) {
      const { target } = e;

      // image preview
      if (target.tagName === 'IMG') {
        const src = target.getAttribute('src');

        this.previewSrc = src;
        return;
      }

      const scrollToTargetId = target.getAttribute(ANCHOR_MARKUP);
      const scrollToTarget = this.$el.querySelector(`[${HEADING_MARKUP}="${scrollToTargetId}"]`);

      if (scrollToTarget) {
        this.scrollToTarget({
          target: scrollToTarget,
          scrollContainer: this.scrollContainer(),
          top: this.top,
        });
      }
    },
    getOffsetTop(target, container) {
      const rect = target.getBoundingClientRect();

      if (container === window || container === document.documentElement) {
        return rect.top;
      }

      return rect.top - container.getBoundingClientRect().top;
    },
    scrollToTarget({ target, scrollContainer = this.scrollContainer(), top = 0, onScrollEnd }) {
      const offsetTop = this.getOffsetTop(target, scrollContainer);
      const scrollTop = getScrollTop(scrollContainer) + offsetTop - top;

      smoothScroll({
        scrollTarget: scrollContainer,
        scrollToTop: scrollTop,
        onScrollEnd,
      });
    },
    scrollToLine({ lineIndex, onScrollEnd }) {
      if (lineIndex) {
        const target = this.$el.querySelector(`[${LINE_MARKUP}="${lineIndex}"]`);

        if (target) this.scrollToTarget({ target, onScrollEnd });
      }
    },
    handleTextChange() {
      this.html = xss.process(this.$options.vMdParser.parser(this.text));

      this.$emit('change', this.text, this.html);
    },
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>

<style lang="scss">
.v-md-editor-preview {
  padding: 20px;
  word-break: break-all;
}
</style>
