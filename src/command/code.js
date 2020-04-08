export const name = 'code';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '``` language';
    const suffix = '```';
    let text = `${prefix}\n${suffix}`;

    if (selected) {
      text = `${prefix}\n  ${selected}\n${suffix}`;
    }

    return {
      text,
      selected: 'language',
    };
  });
}
