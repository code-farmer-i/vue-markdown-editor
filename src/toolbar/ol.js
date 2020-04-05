import { name } from '@/command/ol';

export default {
  name,
  icon: 'fa fa-md-list-ol',
  title: '有序列表',
  action(editor) {
    editor.execCommand(name);
  },
};
