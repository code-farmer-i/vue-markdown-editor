export const name = 'h2';

export default function (editor) {
  editor.insertText({
    prefix: '## ',
    placeholder: '二级标题',
    selected: '二级标题',
  });
}
