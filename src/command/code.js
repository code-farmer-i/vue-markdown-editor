export const name = 'code';

export default function (editor) {
  editor.insertText({
    prefix: '``` language',
    subfix: '```',
    placeholder: `\n`,
    selected: 'language',
  });
}
