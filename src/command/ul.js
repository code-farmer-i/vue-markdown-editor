import { generatorText } from '@/utils/util';

export const name = 'ul';

export default function (editor) {
  editor.insert((selected) => {
    const placeholder = '无序列表';

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
