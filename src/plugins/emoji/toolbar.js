export function generatorMenuItems(emojiJson, commandName) {
  return Object.keys(emojiJson).map((emojiType) => ({
    name: emojiType,
    text: emojiJson[emojiType],
    class: 'v-md-emoji-panel-item',
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
