import { name } from '@/command/undo';

export default {
  name,
  icon: 'fa fa-md-undo',
  title: '撤销',
  action(editor) {
    editor.execCommand(name);
  },
};
