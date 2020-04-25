import { generatorText } from '@/utils/util';

export default function commandHandler(editor, { type = 'todo' } = {}) {
  editor.insert((selected) => {
    const placeholder = '任务列表';
    const markup = type === 'todo' ? ' ' : 'x';

    const selectedGetter = (selected) => selected || placeholder;
    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected) => `- [${markup}] ${selectedGetter(selected)}`,
      selectedGetter,
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
