import { name } from '@/command/bold';

export default {
  name,
  icon: 'v-md-icon-bold',
  title: '粗体',
  action(editor) {
    editor.execCommand(name);
  },
};
