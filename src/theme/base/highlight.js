import hljs from '@/utils/highlight';
import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createHljsTheme({ codeBlockClass }) {
  const baseTheme = createBaseTheme();

  baseTheme.configure((md) => {
    md.set({
      highlight: createHighlightRender({
        hasLang: (lang) => hljs.getLanguage(lang),
        codeBlockClass,
        highlight: (str, lang) => hljs.highlight(lang, str).value,
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    configure(callback) {
      baseTheme.configure((...arg) => {
        callback(...arg, hljs);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
