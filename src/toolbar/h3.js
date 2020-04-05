import { name } from '@/command/h3';

export default {
  name,
  text: 'H3',
  title: '三级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
