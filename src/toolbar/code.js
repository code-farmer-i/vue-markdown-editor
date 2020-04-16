import { name } from '@/command/code';

export default {
  name,
  icon: 'v-md-icon-code',
  title: '插入代码块',
  action(editor) {
    editor.execCommand(name);
  },
};
