export const name = 'link';

export default function (editor) {
  editor.insertText({
    placeholder: '[链接](http://)',
    selected: 'http://',
  });
}
