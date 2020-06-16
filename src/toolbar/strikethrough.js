import { strikethrough } from '@/utils/constants/command';

export default {
  name: strikethrough,
  icon: 'v-md-icon-strikethrough',
  title: (editor) => editor.langConfig.strikethrough.toolbar,
  action(editor) {
    editor.execCommand(strikethrough);
  },
};
