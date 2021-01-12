import createToolbar from './toolbar';
import commandHandler from './command';

export default function creator({ emojiJson, parser }) {
  return function createEmojiPlugin({
    name = 'emoji',
    icon = 'v-md-icon-emoji',
    text,
    title = (editor) => editor.langConfig.emoji,
    customEmoji,
  } = {}) {
    const toolbar = createToolbar({ commandName: name, title, text, icon, emojiJson });

    return {
      install(VMdEditor) {
        if (VMdEditor.name === 'v-md-editor') {
          VMdEditor.command(name, commandHandler);
          VMdEditor.toolbar(name, toolbar);
          VMdEditor.lang.add({
            'zh-CN': {
              emoji: '插入emoji表情',
            },
            'en-US': {
              emoji: 'Insert emoji',
            },
          });
        }

        VMdEditor.vMdParser.use(parser, {
          customEmoji,
        });
      },
    };
  };
}
