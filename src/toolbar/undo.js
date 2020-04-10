import { name } from '@/command/undo';

export default {
  name,
  icon: 'v-md-icon-undo',
  title: '撤销',
  action(editor) {
    editor.execCommand(name);
  },
};
