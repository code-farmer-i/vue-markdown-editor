// import Codemirror from 'codemirror';

export default async ({ Vue }) => {
  const { default: Codemirror } = await import('codemirror');
  const { default: CodemirrorEditor } = await import('../../lib/codemirror-editor');
  const { default: BaseEditor } = await import('../../lib/base-editor');
  const { default: Lang } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');
  const { default: createMermaidPlugin } = await import('../../lib/plugins/mermaid/npm');

  BaseEditor.use(createMermaidPlugin());

  // mode
  await import('codemirror/mode/markdown/markdown');
  await import('codemirror/mode/javascript/javascript');
  await import('codemirror/mode/css/css');
  await import('codemirror/mode/htmlmixed/htmlmixed');
  await import('codemirror/mode/vue/vue');
  // edit
  await import('codemirror/addon/edit/closebrackets');
  await import('codemirror/addon/edit/closetag');
  await import('codemirror/addon/edit/matchbrackets');
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
