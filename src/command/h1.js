export const name = 'h1';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '#';
    const content = selected || '一级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
