import markdownItCodeLineNumber from '@vuepress/markdown/lib/lineNumbers';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    mdParser.use(markdownItCodeLineNumber);
  });
}
