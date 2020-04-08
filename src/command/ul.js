export const name = 'ul';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '-';
    const placeholder = '无序列表';
    let text = `${prefix} ${placeholder}`;

    if (selected) {
      text = selected
        .split('\n')
        .map((row) => `${prefix} ${row}`)
        .join('\n');
    }

    return {
      text,
      selected: selected ? null : placeholder,
    };
  });
}
