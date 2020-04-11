import markdownItContainer from '@/utils/markdown-it-container';

function tipPlugin({ name = 'tip', icon, text, placeholder = '在此输入提示内容', title = '提示' }) {
  return {
    toolbar: {
      name,
      title,
      icon,
      text,
      action(editor) {
        editor.execCommand(name);
      },
    },
    command: {
      name,
      handler(editor, type = 'tip') {
        editor.insert((selected) => {
          const prefix = ':::';
          const suffix = ':::';
          const content = selected || placeholder;

          return {
            text: `${prefix} ${type}\n  ${content}\n${suffix}`,
            selected: content,
          };
        });
      },
    },
    extendMarkdown(mdParser) {
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
    },
  };
}

export default tipPlugin;
