import { name } from '@/command/quote';

export default {
  name,
  icon: 'v-md-icon-quote',
  title: '引用',
  action(editor) {
    editor.execCommand(name);
  },
};
