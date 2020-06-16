import { generatorText } from '@/utils/util';

export { link as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.insert((selected) => {
    const { descPlaceholder } = editor.langConfig.link;
    const linkPlaceholder = 'http://';

    const { insertContent, newSelected } = generatorText({
      selected,
      InsertGetter: (selected) => `[${selected || descPlaceholder}](${linkPlaceholder})`,
      selectedGetter: (selected) => (selected ? linkPlaceholder : descPlaceholder),
    });

    return {
      text: insertContent,
      selected: newSelected,
    };
  });
}
