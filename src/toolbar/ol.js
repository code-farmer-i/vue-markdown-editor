import { name } from '@/command/ol';

export default {
  name,
  icon: 'v-md-icon-ol',
  title: '有序列表',
  action(editor) {
    editor.execCommand(name);
  },
};
