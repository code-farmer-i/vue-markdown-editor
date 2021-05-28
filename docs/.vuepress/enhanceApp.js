// import Codemirror from 'codemirror';

export default async ({ Vue }) => {
  const { default: Codemirror } = await import('codemirror');
  const { default: CodemirrorEditor } = await import('../../lib/codemirror-editor');
  const { default: Lang } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');

  const { default: hljs } = await import('highlight.js/lib');
  const { default: jsLanguage } = await import('highlight.js/lib/languages/javascript');
  const { default: xmlLanguage } = await import('highlight.js/lib/languages/xml');
  const { default: cssLanguage } = await import('highlight.js/lib/languages/css');

  // language js
  hljs.registerLanguage('js', jsLanguage);
  hljs.registerLanguage('javascript', jsLanguage);

  // language xml, html
  hljs.registerLanguage('html', xmlLanguage);
  hljs.registerLanguage('xml', xmlLanguage);

  // language css
  hljs.registerLanguage('css', cssLanguage);

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
