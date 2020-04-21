import { kebabCase } from '@/utils/util';

export default {
  methods: {
    handlePreviewClick(e) {
      const { target } = e;
      const previewScrollerEl = this.$refs.previewScroller.$el;
      const previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');

      let scrollToTargetId = target.getAttribute('data-v-md-heading');

      if (scrollToTargetId) {
        scrollToTargetId = kebabCase(scrollToTargetId);
        const scrollToTarget = document.querySelector(`[data-v-md-heading=${scrollToTargetId}]`);

        this.$refs.preview.scrollToTarget(scrollToTarget, previewScrollWrapper);
      }
    },
  },
};
