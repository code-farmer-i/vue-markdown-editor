export { image as name } from '@/utils/constants/command.js';

export default function (editor, { url, desc, width = '100%', height = 'auto' } = {}) {
  editor.insert(() => {
    const urlPlaceholder = 'http://';
    const descPlaceholder = 'Description';
    let selected = urlPlaceholder;

    if (url && desc) {
      selected = null;
    } else if (url) {
      selected = descPlaceholder;
    } else if (desc) {
      selected = urlPlaceholder;
    }

    return {
      text: `![${desc || descPlaceholder}](${
        url || urlPlaceholder
      }){width="${width}" height="${height}"}`,
      selected,
    };
  });
}
