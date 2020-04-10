import { generatorText } from '@/utils/util';

export const name = 'h2';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '##';
    const placeholder = '二级标题';

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
