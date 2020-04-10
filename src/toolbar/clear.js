import { name } from '@/command/clear';

export default {
  name,
  icon: 'v-md-icon-clear',
  title: '清空',
  action(editor) {
    editor.execCommand(name);
  },
};
