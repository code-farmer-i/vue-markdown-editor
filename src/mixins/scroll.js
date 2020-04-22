export default {
  methods: {
    previewScrollTo(scrollTop) {
      this.$refs.previewScroller.scrollTo(scrollTop);
    },
    scrollToLine(lineIndex) {
      if (this.mode === 'editable') {
        this.editorScrollToLine(lineIndex);
      }

      this.ignoreSyncScroll = true;
      this.previewScrollToLine(lineIndex, () => {
        this.ignoreSyncScroll = false;
      });
    },
    editorScrollToLine(lineIndex) {
      const offsetTop = this.heightAtLine(lineIndex - 1, 'local');

      this.editorScrollToTop(offsetTop);
    },
    previewScrollToLine(lineIndex, callback) {
      if (lineIndex) {
        const { preview } = this.$refs;
        const previewScrollerEl = this.$refs.previewScroller.$el;
        const previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');

        const target = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
        const scrollContainer = this.mode === 'preview' ? window : previewScrollWrapper;

        if (target) preview.scrollToTarget(target, scrollContainer, callback);
      }
    },
  },
};
