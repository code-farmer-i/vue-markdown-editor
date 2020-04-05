import { name } from '@/command/h2';

export default {
  name,
  text: 'H2',
  title: '二级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
