import markdownItContainer from '@/utils/markdown-it-container';

export default function createTipPlugin({
  name = 'tip',
  icon,
  text,
  placeholder = '在此输入提示内容',
  title = '插入提示',
}) {
  const commandHandler = function (editor, type = 'tip') {
    editor.insert((selected) => {
      const prefix = ':::';
      const suffix = ':::';
      const content = selected || placeholder;

      return {
        text: `${prefix} ${type}\n  ${content}\n${suffix}`,
        selected: content,
      };
    });
  };

  const toolbar = {
    title,
    icon,
    text,
    action(editor) {
      editor.execCommand(name);
    },
  };

  return {
    install(VMdEditor) {
      if (VMdEditor.command) VMdEditor.command(name, commandHandler);
      if (VMdEditor.toolbar) VMdEditor.toolbar(name, toolbar);

      VMdEditor.extendMarkdown((mdParser) => {
        if (mdParser) {
          // extend markdown-it
          markdownItContainer(mdParser, {
            type: 'tip',
            defaultTitle: '提示',
          });

          markdownItContainer(mdParser, {
            type: 'warning',
            defaultTitle: '注意',
          });

          markdownItContainer(mdParser, {
            type: 'danger',
            defaultTitle: '警告',
          });
        }
      });
    },
  };
}
