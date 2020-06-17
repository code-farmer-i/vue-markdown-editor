export default async ({ Vue }) => {
  const { default: Lang } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');

  Lang.add({
    'en-US': enUS,
  });

  Vue.mixin({
    watch: {
      $lang: {
        immediate: true,
        handler() {
          if (this.$vMdEditorLang !== this.$lang) this.$vMdEditorLang = this.$lang;
        },
      },
    },
  });
};
