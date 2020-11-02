import markdownItCopyCode from '@/utils/markdown-it-copy-code';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    mdParser.use(markdownItCopyCode);
  });
}
