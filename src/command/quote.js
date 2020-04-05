export const name = 'quote';

export default function (editor) {
  editor.insertText({
    prefix: '>',
    placeholder: '引用',
    selected: '引用',
  });
}
