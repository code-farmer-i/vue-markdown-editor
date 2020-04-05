import { name } from '@/command/ul';

export default {
  name,
  icon: 'fa fa-md-list-ul',
  title: '无序列表',
  action(editor) {
    editor.execCommand(name);
  },
};
