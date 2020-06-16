import { redo } from '@/utils/constants/command';

export default {
  name: redo,
  icon: 'v-md-icon-redo',
  title: (editor) => `${editor.langConfig.redo.toolbar}（Ctrl+Y）`,
  action(editor) {
    editor.execCommand(redo);
  },
};
