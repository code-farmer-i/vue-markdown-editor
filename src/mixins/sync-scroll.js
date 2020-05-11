import { LINE_MARKUP } from '@/utils/constants/markup';

export default {
  data() {
    return {
      enableSyncScroll: true,
    };
  },
  methods: {
    toggleSyncScroll(isEnable = !this.enableSyncScroll) {
      this.enableSyncScroll = isEnable;

      if (isEnable) this.previewSyncScroll();
    },
    previewSyncScroll() {
      if (this.isEditMode) return;

      const previewEl = this.$refs.preview.$el;
      const previewScrollerEl = this.$refs.previewScroller.$el;
      const previewLines = previewEl.querySelectorAll(`[${LINE_MARKUP}]`);
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
          const lineNumber = previewLines[i].getAttribute(LINE_MARKUP);
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
        let newNextLineTop = previewScrollWrapper.scrollHeight - previewScrollWrapper.clientHeight;

        if (currentLine) {
          newLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${currentLine}"]`).offsetTop;
        }

        if (nextLine) {
          newNextLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${nextLine}"]`).offsetTop;
        }

        const newScrollTop = newLineTop + (newNextLineTop - newLineTop) * percent;

        this.previewScrollTo(newScrollTop);
      }
    },
    handleEditorScroll() {
      if (!this.enableSyncScroll || this.ignoreSyncScroll) return;

      clearTimeout(this.scrollTimmer);

      this.scrollTimmer = setTimeout(this.previewSyncScroll, 60);
    },
  },
};
