import { name } from '@/command/code';

export default {
  name,
  icon: 'fa fa-md-code',
  title: '代码块',
  action(editor) {
    editor.execCommand(name);
  },
};
