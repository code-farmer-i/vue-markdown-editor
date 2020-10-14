export default async ({ Vue }) => {
  const { default: Lang, vMdEditorlangConfig } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');

  Lang.add({
    'en-US': enUS,
  });

  Vue.mixin({
    watch: {
      $lang: {
        immediate: true,
        handler() {
          if (vMdEditorlangConfig.lang !== this.$lang) vMdEditorlangConfig.lang = this.$lang;
        },
      },
    },
  });
};
