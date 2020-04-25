import { strikethrough } from '@/utils/constants/command';

export default {
  name: strikethrough,
  icon: 'v-md-icon-strikethrough',
  title: '删除线',
  action(editor) {
    editor.execCommand(strikethrough);
  },
};
