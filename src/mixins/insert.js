export default {
  methods: {
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
