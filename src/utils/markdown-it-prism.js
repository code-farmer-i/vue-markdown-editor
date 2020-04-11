import Prism from 'prismjs';
import markdownIt from '@/utils/markdown-it';

export default function ({ codeBlockClass }) {
  const markdownItInstance = markdownIt({
    hasLang: (lang) => Prism.languages[lang],
    codeBlockClass,
    highlight: (str, lang) => Prism.highlight(str, Prism.languages[lang], lang),
  });

  return {
    prism: Prism,
    mdIt: markdownItInstance,
  };
}
