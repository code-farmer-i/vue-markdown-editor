// base css
import '@/styles/index.scss';

import Preview from '@/preview';
import Container from '@/components/container';
import Scrollbar from '@/components/scrollbar/index';
import TocNav from '@/components/toc-nav';

import EDITOR_MODE from '@/utils/constants/editor-mode';

export default {
  inheritAttrs: false,
  components: {
    [Preview.name]: Preview,
    [Container.name]: Container,
    [Scrollbar.name]: Scrollbar,
    [TocNav.name]: TocNav,
  },
  provide() {
    return {
      markdownEditor: this,
    };
  },
  props: {
    height: String,
    theme: Object,
    mode: {
      type: String,
      default: EDITOR_MODE.EDITABLE,
    },
    autofocus: Boolean,
    placeholder: String,
    tocNavPositionRight: Boolean,
    tabSize: {
      type: Number,
      default: 2,
    },
    beforePreviewChange: {
      type: Function,
      default: (text, next) => {
        next(text);
      },
    },
  },
  emits: ['blur', 'change', 'save', 'image-click'],
  data() {
    return {
      currentMode: this.mode,
      uploadConfig: {},
    };
  },
  watch: {
    mode() {
      this.currentMode = this.mode;
    },
    currentMode() {
      if (this.currentMode === EDITOR_MODE.EDITABLE && this.enableSyncScroll) {
        this.$nextTick(this.previewSyncScroll);
      }
    },
  },
  created() {
    if (this.theme) this.$options.use(this.theme);
  },
  computed: {
    isPreviewMode() {
      return this.currentMode === EDITOR_MODE.PREVIEW;
    },
    isEditMode() {
      return this.currentMode === EDITOR_MODE.EDIT;
    },
    proxySlots() {
      return ['left-toolbar', 'right-toolbar'].filter((slotName) => this.$slots[slotName]);
    },
  },
  mounted() {
    if (this.autofocus) {
      this.$nextTick(this.setFocusEnd);
    }
  },
  methods: {
    setFocusEnd() {
      this.editorFocusEnd();
      this.editorScrollToTop(9999);
      this.previewScrollTo(9999);
    },
    // change event
    handleChange(text, html) {
      this.$emit('change', text, html);
    },
    handleBlur(e) {
      this.$emit('blur', e);
    },
    handlePreviewImageClick(images, currentIndex) {
      this.$emit('image-click', images, currentIndex);
    },
    save() {
      this.$emit('save', this.text, this.$refs.preview.html);
    },
    insert(getInsertContent) {
      this.focus();

      const currentSelectedStr = this.getCurrentSelectedStr();
      const { selected, text } = getInsertContent(currentSelectedStr);

      this.replaceSelectionText(text);

      this.$nextTick(() => {
        this.changeSelctionTo(text, selected);
      });
    },
  },
};
