export const name = 'h6';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '######';
    const content = selected || '六级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
