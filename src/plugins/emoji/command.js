export default function commandHandler(editor, emojiType) {
  editor.insert(() => {
    const prefix = ':';
    const suffix = ':';

    return {
      text: `${prefix}${emojiType}${suffix}`,
    };
  });
}
