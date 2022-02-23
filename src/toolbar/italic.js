import { italic } from '@/utils/constants/command';

export default {
  name: italic,
  icon: 'v-md-icon-italic',
  title: (editor) => editor.langConfig.italic.toolbar,
  action(editor) {
    editor.execCommand(italic);
  },
};
