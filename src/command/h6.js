export const name = 'h6';

export default function (editor) {
  editor.insertText({
    prefix: '###### ',
    placeholder: '六级标题',
    selected: '六级标题',
  });
}
