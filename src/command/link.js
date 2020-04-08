export const name = 'link';

export default function (editor) {
  editor.insert(() => ({
    text: '[链接](http://)',
    selected: 'http://',
  }));
}
