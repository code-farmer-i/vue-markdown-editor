import { name } from '@/command/h6';

export default {
  name,
  text: 'H6',
  title: '六级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
