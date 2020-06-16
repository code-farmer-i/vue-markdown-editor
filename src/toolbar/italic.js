import { italic } from '@/utils/constants/command';

export default {
  name: italic,
  icon: 'v-md-icon-italic',
  title: (editor) => `${editor.langConfig.italic.toolbar}（Ctrl+I）`,
  action(editor) {
    editor.execCommand(italic);
  },
};
