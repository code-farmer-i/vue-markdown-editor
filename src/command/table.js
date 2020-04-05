export const name = 'table';

const placeholder = `|column1|column2|column3|
|-|-|-|
|content1|content2|content3|`;

export default function (editor) {
  editor.insertText({
    placeholder,
    selected: 'column1',
  });
}
