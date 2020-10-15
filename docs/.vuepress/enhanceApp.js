// import Codemirror from 'codemirror';

export default async ({ Vue }) => {
  const { default: Codemirror } = await import('codemirror');
  const { default: CodemirrorEditor } = await import('../../lib/codemirror-editor');
  const { default: Lang } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');

  // mode
  await import('codemirror/mode/markdown/markdown');
  // placeholder
  await import('codemirror/addon/display/placeholder');
  // active-line
  await import('codemirror/addon/selection/active-line');
  // scrollbar
  await import('codemirror/addon/scroll/simplescrollbars');
  await import('codemirror/addon/scroll/simplescrollbars.css');
  // style
  await import('codemirror/lib/codemirror.css');

  Lang.add({
    'en-US': enUS,
  });

  CodemirrorEditor.Codemirror = Codemirror;

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
