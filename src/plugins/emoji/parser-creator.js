export default function parserCreator(mdEmojiPlugin) {
  return function (vMdParser, options = {}) {
    vMdParser.extendMarkdown((mdParser) => {
      // extend markdown-it
      mdParser.use(mdEmojiPlugin);

      if (options.customEmoji) {
        mdParser.renderer.rules.emoji = function (token, idx) {
          return '<span class="v-md-emoji emoji-' + token[idx].markup + '"></span>';
        };
      }
    });
  };
}
