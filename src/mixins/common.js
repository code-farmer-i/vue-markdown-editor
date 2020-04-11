// font css
import '@/assets/css/font';

import Preview from '@/preview';
import Container from '@/components/container';
import Scrollbar from '@/components/scrollbar/index';

export default {
  inheritAttrs: false,
  components: {
    [Preview.name]: Preview,
    [Container.name]: Container,
    [Scrollbar.name]: Scrollbar,
  },
  provide() {
    return {
      markdownEditor: this,
    };
  },
  props: {
    height: String,
    theme: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // change event
    handleChange(text, html) {
      this.$emit('change', text, html);
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
