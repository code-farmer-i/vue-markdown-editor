export const name = 'h5';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '#####';
    const content = selected || '五级标题';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
