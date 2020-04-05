export const name = 'bold';

export default function (editor) {
  editor.insertText({
    prefix: '**',
    suffix: '**',
    placeholder: '粗体',
    selected: '粗体',
  });
}
