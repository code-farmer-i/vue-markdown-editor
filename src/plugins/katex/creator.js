export default function (parser) {
  return function createKatexPlugin(katexOptions) {
    return {
      install(VMdEditor) {
        VMdEditor.vMdParser.use(parser, katexOptions);
      },
    };
  };
}
