export default {
  computed: {
    langConfig() {
      const lang = this.$options.lang.config;

      return lang.langConfig[lang.lang];
    },
  },
};
