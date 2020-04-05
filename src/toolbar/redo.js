import { name } from '@/command/redo';

export default {
  name,
  icon: 'fa fa-md-repeat',
  title: '重做',
  action(editor) {
    editor.execCommand(name);
  },
};
