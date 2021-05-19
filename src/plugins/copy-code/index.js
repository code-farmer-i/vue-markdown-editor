import markdownItCopyCode from '@/utils/markdown-it-copy-code';
import createCopyCodePreview from './preview';

export default function createCopyCodePlugin() {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItCopyCode);
      });

      VMdEditor.use(createCopyCodePreview());
    },
  };
}
