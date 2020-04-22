export default {
  methods: {
    handlePreviewClick(e) {
      const { target } = e;
      const { preview } = this.$refs;
      const scrollToTargetId = target.getAttribute('data-v-md-anchor');
      const scrollToTarget = preview.$el.querySelector(`[data-v-md-heading=${scrollToTargetId}]`);
      const scrollToTargetLineNumber = scrollToTarget?.getAttribute('data-v-md-line');

      if (scrollToTargetLineNumber) {
        this.previewScrollToLine(scrollToTargetLineNumber);
      }
    },
  },
};
