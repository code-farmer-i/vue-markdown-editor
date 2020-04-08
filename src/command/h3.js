export const name = 'h3';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '###';
    const content = selected || '三级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
