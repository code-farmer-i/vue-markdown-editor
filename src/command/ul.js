import { generatorText } from '@/utils/util';

export { ul as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.insert((selected) => {
    const { placeholder } = editor.langConfig.ul;

    const selectedGetter = (selected) => selected || placeholder;
    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected) => `- ${selectedGetter(selected)}`,
      selectedGetter,
      ignoreEmptyLine: false,
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
