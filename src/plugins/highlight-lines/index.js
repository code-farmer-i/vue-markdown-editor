import markdownItHighlightLines from '@/utils/markdown-it-highlight-lines';
import './highlight-lines.css';

export default function () {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItHighlightLines);
      });
    },
  };
}
