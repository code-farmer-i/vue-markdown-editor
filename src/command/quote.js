export { quote as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.insert((selected) => {
    const prefix = '>';
    const content = selected || '引用';

    return {
      text: `${prefix} ${content}`,
      selected: content,
    };
  });
}
