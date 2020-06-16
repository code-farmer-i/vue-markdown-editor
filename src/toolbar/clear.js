import { clear } from '@/utils/constants/command';

export default {
  name: clear,
  icon: 'v-md-icon-clear',
  title: (editor) => editor.langConfig.clear.toolbar,
  action(editor) {
    editor.execCommand(clear);
  },
};
