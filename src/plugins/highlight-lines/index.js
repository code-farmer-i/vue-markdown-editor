import markdownItHighlightLines from '@/utils/markdown-it-highlight-lines';

export default function () {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItHighlightLines);
      });
    },
  };
}
