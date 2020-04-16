import { name } from '@/command/link';

export default {
  name,
  icon: 'v-md-icon-link',
  title: '插入链接',
  action(editor) {
    editor.execCommand(name);
  },
};
