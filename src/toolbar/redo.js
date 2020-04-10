import { name } from '@/command/redo';

export default {
  name,
  icon: 'v-md-icon-redo',
  title: '重做',
  action(editor) {
    editor.execCommand(name);
  },
};
