export const name = 'h4';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '####';
    const content = selected || '四级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
