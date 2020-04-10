export const name = 'h1';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '#';
    const placeholder = '一级标题';
    let insertContent;
    let newSelected;

    if (selected) {
      insertContent = selected
        .split('\n')
        .map((row) => `${prefix} ${row}`)
        .join('\n');

      // 当前有选中的文本 则选中当前选中文本
      newSelected = selected;

      // 当前选中的文本包含换行 则选中插入的所有文本
      if (selected.indexOf('\n') !== -1) {
        newSelected = insertContent;
      }
    } else {
      insertContent = `${prefix} ${placeholder}`;
      // 没有选中文本 则选中占位符
      newSelected = placeholder;
    }

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
