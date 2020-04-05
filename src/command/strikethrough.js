export const name = 'strikethrough';

export default function (editor) {
  editor.insertText({
    prefix: '~~',
    subfix: '~~',
    placeholder: '删除线',
    selected: '删除线',
  });
}
