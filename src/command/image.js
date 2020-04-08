export const name = 'image';

export default function (editor) {
  editor.insert(() => ({
    text: '![](Enter picture address)',
    selected: 'Enter picture address',
  }));
}
