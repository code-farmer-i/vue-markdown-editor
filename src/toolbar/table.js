import { table } from '@/utils/constants/command';

export default {
  name: table,
  icon: 'v-md-icon-table',
  title: '表格',
  action(editor) {
    editor.execCommand(table);
  },
};
