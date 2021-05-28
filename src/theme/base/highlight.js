import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createHljsTheme({
  Hljs,
  baseConfig,
  codeBlockClass,
  codeHighlightExtensionMap = {},
} = {}) {
  const baseTheme = createBaseTheme(baseConfig);

  baseTheme.extend((md) => {
    md.set({
      highlight: createHighlightRender({
        codeHighlightExtensionMap,
        hasLang: (lang) => Hljs.getLanguage(lang),
        codeBlockClass,
        highlight: (str, lang) => Hljs.highlight(str, { language: lang }).value,
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    extend(callback) {
      baseTheme.extend((...arg) => {
        callback(...arg);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
