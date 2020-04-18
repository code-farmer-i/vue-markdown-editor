export const name = 'image';

export default function (editor, { url, desc, width = 'auto', height = 'auto' } = {}) {
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
