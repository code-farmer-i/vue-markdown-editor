import { generatorText } from '@/utils/util';

export { ol as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.insert((selected) => {
    const { placeholder } = editor.langConfig.ol;

    const selectedGetter = (selected) => selected || placeholder;
    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected, rowIndex) => `${rowIndex}. ${selectedGetter(selected)}`,
      selectedGetter,
      ignoreEmptyLine: false,
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
