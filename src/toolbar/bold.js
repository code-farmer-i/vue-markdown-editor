import { bold } from '@/utils/constants/command';

export default {
  name: bold,
  icon: 'v-md-icon-bold',
  title: (editor) => editor.langConfig.bold.toolbar,
  action(editor) {
    editor.execCommand(bold);
  },
};
