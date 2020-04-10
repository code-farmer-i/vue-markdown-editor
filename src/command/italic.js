import { generatorText } from '@/utils/util';

export const name = 'italic';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '*';
    const suffix = '*';
    const placeholder = '斜体';

    const selectedGetter = (selected) => selected || placeholder;
    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected) => `${prefix}${selectedGetter(selected)}${suffix}`,
      selectedGetter,
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
