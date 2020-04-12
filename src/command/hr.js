export const name = 'hr';

export default function (editor) {
  editor.insert(() => ({
    text: '------------------------------------',
  }));
}
