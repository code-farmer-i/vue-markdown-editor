export default function createToolbar({ commandName, text, title, icon }) {
  return {
    title,
    icon,
    text,
    action(editor) {
      editor.execCommand(commandName, { type: 'todo' });
    },
  };
}
