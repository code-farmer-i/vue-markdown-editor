const lineMarkup = 'data-v-md-line';

export default {
  data() {
    return {
      enableSyncScroll: true,
    };
  },
  methods: {
    toggleSyncScroll(isEnable = !this.enableSyncScroll) {
      this.enableSyncScroll = isEnable;

      if (isEnable) this.handleScroll();
    },
    previewScrollTo(scrollTop) {
      this.$refs.previewScroller.scrollTo(scrollTop);
    },
    handleScroll() {
      if (!this.enableSyncScroll) return;

      clearTimeout(this.scrollTimmer);

      this.scrollTimmer = setTimeout(() => {
        const previewEl = this.$refs.preview.$el;
        const previewScrollerEl = this.$refs.previewScroller.$el;
        const previewLines = previewEl.querySelectorAll(`[${lineMarkup}]`);
        const {
          clientHeight: editorClientHeight,
          top: editorScrollTop,
          height: editorScrollHeight,
        } = this.getScrollInfo();
        const previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');

        if (editorClientHeight + editorScrollTop === editorScrollHeight) {
          const { clientHeight } = previewScrollWrapper;
          const { scrollHeight } = previewScrollWrapper;

          this.previewScrollTo(scrollHeight - clientHeight);
        } else {
          let currentLine;
          let nextLine;

          for (let i = 0; i < previewLines.length; i++) {
            const lineNumber = previewLines[i].getAttribute(lineMarkup);
            const height = this.heightAtLine(lineNumber - 1, 'local');

            if (height < editorScrollTop) {
              currentLine = lineNumber;
            } else {
              nextLine = lineNumber;
              break;
            }
          }

          let percent = 0;

          if (currentLine && nextLine && currentLine !== nextLine) {
            const currentLineTop = this.heightAtLine(currentLine - 1, 'local');
            const nextLineTop = this.heightAtLine(nextLine - 1, 'local');

            percent = (editorScrollTop - currentLineTop) / (nextLineTop - currentLineTop);
          }

          let newLineTop = 0;
          let newNextLineTop =
            previewScrollWrapper.scrollHeight - previewScrollWrapper.clientHeight;

          if (currentLine) {
            newLineTop = previewEl.querySelector(`[${lineMarkup}="${currentLine}"]`).offsetTop;
          }

          if (nextLine) {
            newNextLineTop = previewEl.querySelector(`[${lineMarkup}="${nextLine}"]`).offsetTop;
          }

          const newScrollTop = newLineTop + (newNextLineTop - newLineTop) * percent;

          this.previewScrollTo(newScrollTop);
        }
      }, 60);
    },
  },
};
