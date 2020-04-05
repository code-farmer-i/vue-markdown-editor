export const name = 'image';

export default function (editor) {
  editor.insertText({
    placeholder: '![](Enter picture address)',
    selected: 'Enter picture address',
  });
}
