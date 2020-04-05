import { name } from '@/command/link';

export default {
  name,
  icon: 'fa fa-md-link',
  title: '链接',
  action(editor) {
    editor.execCommand(name);
  },
};
