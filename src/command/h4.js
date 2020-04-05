export const name = 'h4';

export default function (editor) {
  editor.insertText({
    prefix: '#### ',
    placeholder: '四级标题',
    selected: '四级标题',
  });
}
