export const name = 'quote';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '>';
    const content = selected || '引用';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
