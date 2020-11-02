import markdownItKatex from '@/utils/markdown-it-katex';

export default function parserCreator(katex) {
  return function parser(vMdParser, katexOptions) {
    vMdParser.extendMarkdown((mdParser) => {
      if (katex) {
        mdParser.use(markdownItKatex, {
          ...katexOptions,
          katex,
        });
      }
    });
  };
}
