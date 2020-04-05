export const name = 'code';

export default function (editor) {
  editor.insertText({
    prefix: '``` language',
    suffix: '```',
    placeholder: '\n',
    selected: 'language',
  });
}
