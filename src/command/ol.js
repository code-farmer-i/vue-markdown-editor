export const name = 'ol';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '1.';
    const placeholder = '有序列表';
    let text = `${prefix} ${placeholder}`;

    if (selected) {
      text = selected
        .split('\n')
        .map((row, idx) => `${idx + 1}. ${row}`)
        .join('\n');
    }

    return {
      text,
      selected: selected ? null : placeholder,
    };
  });
}
