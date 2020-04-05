export const name = 'h5';

export default function (editor) {
  editor.insertText({
    prefix: '##### ',
    placeholder: '五级标题',
    selected: '五级标题',
  });
}
