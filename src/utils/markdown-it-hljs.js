import hljs from '@/utils/highlight';
import markdownIt from '@/utils/markdown-it';

export default function ({ codeBlockClass }) {
  const markdownItInstance = markdownIt({
    hasLang: (lang) => hljs.getLanguage(lang),
    codeBlockClass,
    highlight: (str, lang) => hljs.highlight(lang, str).value,
  });

  return {
    hljs,
    mdIt: markdownItInstance,
  };
}
