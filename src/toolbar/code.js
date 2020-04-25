import { code } from '@/utils/constants/command';

export default {
  name: code,
  icon: 'v-md-icon-code',
  title: '插入代码块',
  action(editor) {
    editor.execCommand(code);
  },
};
