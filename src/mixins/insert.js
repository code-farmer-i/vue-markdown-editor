export default {
  methods: {
    insert(getInsertContent) {
      this.focus();

      const currentSelectedStr = this.getCurrentSelectedStr();
      const { selected, text } = getInsertContent(currentSelectedStr);

      this.replaceSelectionText(text);

      this.$nextTick(() => {
        if (!selected) return;

        this.changeSelctionTo(text, selected);
      });
    },
  },
};
