import parser from './parser';

export default function () {
  return {
    install(VMdEditor) {
      VMdEditor.vMdParser.use(parser);
    },
  };
}
