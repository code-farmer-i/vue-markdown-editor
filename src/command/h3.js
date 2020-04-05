export const name = 'h3';

export default function (editor) {
  editor.insertText({
    prefix: '### ',
    placeholder: '三级标题',
    selected: '三级标题',
  });
}
