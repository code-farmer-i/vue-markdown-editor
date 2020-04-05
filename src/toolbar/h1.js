import { name } from '@/command/h1';

export default {
  name,
  text: 'H1',
  title: '一级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
