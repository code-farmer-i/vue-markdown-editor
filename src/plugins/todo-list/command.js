import { generatorText } from '@/utils/util';

export default function commandHandler(editor, { type = 'todo' } = {}) {
  editor.insert((selected) => {
    const { placeholder } = editor.langConfig.task;
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
