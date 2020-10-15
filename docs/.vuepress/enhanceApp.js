import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

export default async ({ Vue }) => {
  const { default: CodemirrorEditor } = await import('../../lib/codemirror-editor');
  const { default: Lang } = await import('../../lib/lang/index');
  const { default: enUS } = await import('../../lib/lang/en-US');

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
