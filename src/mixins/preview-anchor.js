export default {
  methods: {
    handlePreviewClick(e) {
      const { target } = e;
      const previewScrollerEl = this.$refs.previewScroller.$el;
      const previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');
      const scrollContainer = this.mode === 'preview' ? window : previewScrollWrapper;

      const scrollToTargetId = target.getAttribute('data-v-md-anchor');

      if (scrollToTargetId) {
        const scrollToTarget = previewScrollerEl.querySelector(
          `[data-v-md-heading=${scrollToTargetId}]`
        );

        this.$refs.preview.scrollToTarget(scrollToTarget, scrollContainer);
      }
    },
  },
};
