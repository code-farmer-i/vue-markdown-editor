import { undo } from '@/utils/constants/command';

export default {
  name: undo,
  icon: 'v-md-icon-undo',
  title: (editor) => `${editor.langConfig.undo.toolbar}（Ctrl+Z）`,
  action(editor) {
    editor.execCommand(undo);
  },
};
