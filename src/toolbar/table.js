import { name } from '@/command/table';

export default {
  name,
  icon: 'fa fa-md-table',
  title: '表格',
  action(editor) {
    editor.execCommand(name);
  },
};
