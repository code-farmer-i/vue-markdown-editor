export const name = 'image';

export default function (editor) {
  editor.insert(() => ({
    text: '![Description](http://)',
    selected: 'http://',
  }));
}
