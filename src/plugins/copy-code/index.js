import parser from './parser';
import createCopyCodePreview from './preview';

export default function createCopyCodePlugin() {
  return {
    install(VMdEditor) {
      VMdEditor.vMdParser.use(parser);

      VMdEditor.use(createCopyCodePreview());
    },
  };
}
