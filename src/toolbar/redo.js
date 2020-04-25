import { redo } from '@/utils/constants/command';

export default {
  name: redo,
  icon: 'v-md-icon-redo',
  title: '重做（Ctrl+Y）',
  action(editor) {
    editor.execCommand(redo);
  },
};
