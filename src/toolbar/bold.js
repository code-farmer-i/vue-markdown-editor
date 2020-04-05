import { name } from '@/command/bold';

export default {
  name,
  icon: 'fa fa-md-bold',
  title: '粗体',
  action(editor) {
    editor.execCommand(name);
  },
};
