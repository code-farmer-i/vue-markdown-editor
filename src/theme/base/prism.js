import Prism from 'prismjs';
import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createHljsTheme({ codeBlockClass }) {
  const baseTheme = createBaseTheme();

  baseTheme.configure((md) => {
    md.set({
      highlight: createHighlightRender({
        hasLang: (lang) => Prism.languages[lang],
        codeBlockClass,
        highlight: (str, lang) => Prism.highlight(str, Prism.languages[lang], lang),
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    configure(callback) {
      baseTheme.configure((...arg) => {
        callback(...arg, Prism);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
