import { name } from '@/command/quote';

export default {
  name,
  icon: 'fa fa-md-quote-left',
  title: '引用',
  action(editor) {
    editor.execCommand(name);
  },
};
