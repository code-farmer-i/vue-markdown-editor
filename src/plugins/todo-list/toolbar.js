export default function createToolbar({ commandName, text, title, icon }) {
  return {
    title,
    icon,
    text,
    menus: [
      {
        text: '已完成任务列表',
        action(editor) {
          editor.execCommand(commandName, { type: 'completed' });
        },
      },
      {
        text: '未完成任务列表',
        action(editor) {
          editor.execCommand(commandName, { type: 'todo' });
        },
      },
    ],
  };
}
