export const name = 'bold';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '**';
    const suffix = '**';
    const content = selected || '粗体';

    return {
      text: `${prefix}${content}${suffix}`,
      selected: content,
    };
  });
}
