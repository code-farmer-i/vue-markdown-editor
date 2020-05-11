import markdownItContainer from '@/utils/markdown-it-container';
import './tip.css';

export default function createTipPlugin({
  name = 'tip',
  icon = 'v-md-icon-tip',
  text,
  placeholder = '在此输入内容',
  title = '插入提示',
} = {}) {
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
    menus: [
      {
        name: 'tip',
        text: '提示',
        action(editor) {
          editor.execCommand(name);
        },
      },
      {
        name: 'warning',
        text: '注意',
        action(editor) {
          editor.execCommand(name, 'warning');
        },
      },
      {
        name: 'danger',
        text: '警告',
        action(editor) {
          editor.execCommand(name, 'danger');
        },
      },
    ],
  };

  const extendMarkdown = function (mdParser) {
    const blockClass = 'v-md-plugin-tip';

    if (mdParser) {
      // extend markdown-it
      markdownItContainer(mdParser, {
        type: 'tip',
        defaultTitle: '提示',
        blockClass,
      });

      markdownItContainer(mdParser, {
        type: 'warning',
        defaultTitle: '注意',
        blockClass,
      });

      markdownItContainer(mdParser, {
        type: 'danger',
        defaultTitle: '警告',
        blockClass,
      });
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
}
