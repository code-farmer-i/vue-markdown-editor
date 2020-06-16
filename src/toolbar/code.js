import { code } from '@/utils/constants/command';

export default {
  name: code,
  icon: 'v-md-icon-code',
  title: (editor) => editor.langConfig.code.toolbar,
  action(editor) {
    editor.execCommand(code);
  },
};
