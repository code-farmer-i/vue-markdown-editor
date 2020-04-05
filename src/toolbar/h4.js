import { name } from '@/command/h4';

export default {
  name,
  text: 'H4',
  title: '四级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
