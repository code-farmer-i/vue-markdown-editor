import { LINE_MARKUP } from '@/utils/constants';

export default {
  data() {
    return {
      tocVisible: false,
      titles: [],
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newval, oldVal) {
        // render in the first time
        if (typeof oldVal === 'undefined') {
          this.$nextTick(this.updateTocNav);
          return;
        }

        if (this.updateTocNavTimmer) clearTimeout(this.updateTocNavTimmer);

        this.updateTocNavTimmer = setTimeout(this.updateTocNav, 800);
      },
    },
  },
  methods: {
    toggleToc(visible = !this.tocVisible) {
      this.tocVisible = visible;
    },
    updateTocNav() {
      const previewEl = this.$refs.preview.$el;
      const anchors = previewEl.querySelectorAll('h2,h3');
      const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

      if (!titles.length) {
        this.titles = [];
        return;
      }

      const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute(LINE_MARKUP),
        indent: hTags.indexOf(el.tagName),
      }));
    },
    handleNavClick({ lineIndex }) {
      this.scrollToLine(lineIndex);
    },
  },
};
