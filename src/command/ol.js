export const name = 'ol';

export default function (editor) {
  editor.insertText({
    prefix: '1. ',
    placeholder: '有序列表',
    selected: '有序列表',
  });
}
