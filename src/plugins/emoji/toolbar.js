export function generatorMenuItems(emojiJson, commandName) {
  return Object.entries(emojiJson).map(([emojiType, unicode]) => ({
    name: emojiType,
    text: unicode,
    action(editor) {
      editor.execCommand(commandName, emojiType);
    },
  }));
}

export default function createToolbar({ commandName, emojiJson, text, title, icon }) {
  return {
    title,
    icon,
    text,
    menus: {
      mode: 'panel',
      items: generatorMenuItems(emojiJson, commandName),
    },
  };
}
