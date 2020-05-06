import createToolbar from './toolbar';
import commandHandler from './command';

export default function creator({ emojiJson, mdEmojiPlugin }) {
  return function createEmojiPlugin({
    name = 'emoji',
    icon = 'v-md-icon-emoji',
    text,
    title = '插入emoji表情',
    customEmoji,
  } = {}) {
    const toolbar = createToolbar({ commandName: name, title, text, icon, emojiJson });

    const extendMarkdown = function (mdParser) {
      if (mdParser) {
        // extend markdown-it
        mdParser.use(mdEmojiPlugin);

        if (customEmoji) {
          mdParser.renderer.rules.emoji = function (token, idx) {
            return '<span class="v-md-emoji emoji-' + token[idx].markup + '"></span>';
          };
        }
      }
    };

    return {
      install(VMdEditor) {
        if (VMdEditor.name === 'v-md-editor') {
          VMdEditor.command(name, commandHandler);
          VMdEditor.toolbar(name, toolbar);
        }

        VMdEditor.extendMarkdown(extendMarkdown);
      },
    };
  };
}
