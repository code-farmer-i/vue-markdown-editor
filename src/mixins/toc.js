import { LINE_MARKUP } from '@/utils/constants/markup';

export default {
  data() {
    return {
      tocVisible: this.defaultShowToc,
      titles: [],
    };
  },
  props: {
    includeLevel: {
      type: Array,
      default: () => [2, 3],
    },
    defaultShowToc: Boolean,
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
  computed: {
    anchorsSelector() {
      return this.includeLevel.map((level) => `h${level}`).join(',');
    },
  },
  methods: {
    toggleToc(visible = !this.tocVisible) {
      this.tocVisible = visible;
    },
    updateTocNav() {
      const previewEl = this.$refs.preview?.$el;

      if (!previewEl) return;

      const anchors = previewEl.querySelectorAll(this.anchorsSelector);
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
