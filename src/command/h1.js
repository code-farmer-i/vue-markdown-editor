import { generatorText } from '@/utils/util';

export { h1 as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '#';
    const { placeholder } = editor.langConfig.h1;

    const selectedGetter = (selected) => selected || placeholder;
    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected) => `${prefix} ${selectedGetter(selected)}`,
      selectedGetter,
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
