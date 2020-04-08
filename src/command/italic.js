export const name = 'italic';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '*';
    const suffix = '*';
    const content = selected || '斜体';

    return {
      text: `${prefix}${content}${suffix}`,
      selected: content,
    };
  });
}
