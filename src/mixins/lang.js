export default {
  computed: {
    langConfig() {
      return this.$vMdEditorLangConfig[this.$vMdEditorLang];
    },
  },
};
