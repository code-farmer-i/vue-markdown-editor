export const name = 'strikethrough';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '~~';
    const suffix = '~~';
    const content = selected || '删除线';

    return {
      text: `${prefix}${content}${suffix}`,
      selected: content,
    };
  });
}
