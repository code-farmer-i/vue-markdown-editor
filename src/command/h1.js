export const name = 'h1';

export default function (editor) {
  editor.insertText({
    prefix: '# ',
    placeholder: '一级标题',
    selected: '一级标题',
  });
}
