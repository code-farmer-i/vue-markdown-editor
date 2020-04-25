import { clear } from '@/utils/constants/command';

export default {
  name: clear,
  icon: 'v-md-icon-clear',
  title: '清空',
  action(editor) {
    editor.execCommand(clear);
  },
};
