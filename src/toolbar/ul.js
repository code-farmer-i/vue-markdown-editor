import { name } from '@/command/ul';

export default {
  name,
  icon: 'v-md-icon-ul',
  title: '无序列表',
  action(editor) {
    editor.execCommand(name);
  },
};
