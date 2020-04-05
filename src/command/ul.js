export const name = 'ul';

export default function (editor) {
  editor.insertText({
    prefix: '- ',
    placeholder: '无序列表',
    selected: '无序列表',
  });
}
