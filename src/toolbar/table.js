import { table } from '@/utils/constants/command';

export default {
  name: table,
  icon: 'v-md-icon-table',
  title: (editor) => editor.langConfig.table.toolbar,
  action(editor) {
    editor.execCommand(table);
  },
};
