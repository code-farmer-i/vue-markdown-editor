export const name = 'h2';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '##';
    const content = selected || '二级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
