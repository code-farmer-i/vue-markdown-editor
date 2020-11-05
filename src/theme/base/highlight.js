import hljs from '@/utils/highlight';
import createBaseTheme from './base';
import { createHighlightRender } from '@/utils/markdown-it';

export default function createHljsTheme({
  baseConfig,
  codeBlockClass,
  codeHighlightExtensionMap = {},
} = {}) {
  const baseTheme = createBaseTheme(baseConfig);

  baseTheme.extend((md) => {
    md.set({
      highlight: createHighlightRender({
        codeHighlightExtensionMap,
        hasLang: (lang) => hljs.getLanguage(lang),
        codeBlockClass,
        highlight: (str, lang) => hljs.highlight(lang, str).value,
      }),
    });
  });

  return {
    previewClass: 'markdown-body',
    extend(callback) {
      baseTheme.extend((...arg) => {
        callback(...arg, hljs);
      });
    },
    markdownParser: baseTheme.markdownParser,
  };
}
