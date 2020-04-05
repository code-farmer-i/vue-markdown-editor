export const name = 'italic';

export default function (editor) {
  editor.insertText({
    prefix: '*',
    subfix: '*',
    placeholder: '斜体',
    selected: '斜体',
  });
}
