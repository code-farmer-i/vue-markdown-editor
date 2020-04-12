import { name } from '@/command/hr';

export default {
  name,
  icon: 'v-md-icon-horizontal',
  title: '分割线',
  action(editor) {
    editor.execCommand(name);
  },
};
