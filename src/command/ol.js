import { generatorText } from '@/utils/util';

export const name = 'ol';

export default function (editor) {
  editor.insert((selected) => {
    const placeholder = '有序列表';

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
