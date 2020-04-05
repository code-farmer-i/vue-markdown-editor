export const name = 'italic';

export default function (editor) {
  editor.insertText({
    prefix: '*',
    suffix: '*',
    placeholder: '斜体',
    selected: '斜体',
  });
}
