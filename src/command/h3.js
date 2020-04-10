import { generatorText } from '@/utils/util';

export const name = 'h3';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '###';
    const placeholder = '三级标题';

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
