import { getScrollTop } from '@/utils/scroll-top';
import smoothScroll from '@/utils/smooth-scroll';
import { LINE_MARKUP, HEADING_MARKUP, ANCHOR_MARKUP } from '@/utils/constants/markup';
import ImagePreview from '@/components/image-preview';

export default {
  props: {
    tabSize: {
      type: Number,
      default: 2,
    },
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
  data() {
    return {
      previewSrc: '',
    };
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
    scrollToTarget({
      target,
      scrollContainer = this.scrollContainer(),
      top = this.top,
      onScrollEnd,
    }) {
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
  },
};
