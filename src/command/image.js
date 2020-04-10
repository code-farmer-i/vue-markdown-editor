export const name = 'image';

export default function (editor, { url, desc } = {}) {
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
      text: `![${desc || descPlaceholder}](${url || urlPlaceholder})`,
      selected,
    };
  });
}
