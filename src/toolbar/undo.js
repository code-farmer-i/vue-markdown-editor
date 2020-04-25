import { undo } from '@/utils/constants/command';

export default {
  name: undo,
  icon: 'v-md-icon-undo',
  title: '撤销（Ctrl+Z）',
  action(editor) {
    editor.execCommand(undo);
  },
};
