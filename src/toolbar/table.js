import { name } from '@/command/table';

export default {
  name,
  icon: 'v-md-icon-table',
  title: '表格',
  action(editor) {
    editor.execCommand(name);
  },
};
