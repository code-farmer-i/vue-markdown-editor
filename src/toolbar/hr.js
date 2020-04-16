import { name } from '@/command/hr';

export default {
  name,
  icon: 'v-md-icon-horizontal',
  title: '插入分割线',
  action(editor) {
    editor.execCommand(name);
  },
};
