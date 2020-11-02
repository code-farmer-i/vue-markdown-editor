import markdownItHighlightLines from '@/utils/markdown-it-highlight-lines';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    mdParser.use(markdownItHighlightLines);
  });
}
