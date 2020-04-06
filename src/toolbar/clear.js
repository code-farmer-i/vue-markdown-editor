import { name } from '@/command/clear';

export default {
  name,
  icon: 'fa fa-md-trash-o',
  title: '清空',
  action(editor) {
    editor.execCommand(name);
  },
};
