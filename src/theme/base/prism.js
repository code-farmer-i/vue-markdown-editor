import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createPrismTheme({
  Prism,
  baseConfig,
  codeBlockClass,
  codeHighlightExtensionMap = {},
} = {}) {
  const baseTheme = createBaseTheme(baseConfig);

  baseTheme.extend((md) => {
    md.set({
      highlight: createHighlightRender({
        codeHighlightExtensionMap,
        hasLang: (lang) => Prism.languages[lang],
        codeBlockClass,
        highlight: (str, lang) => Prism.highlight(str, Prism.languages[lang], lang),
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    extend(callback) {
      baseTheme.extend((...arg) => {
        callback(...arg, Prism);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
