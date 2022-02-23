import { ul } from '@/utils/constants/command';

export default {
  name: ul,
  icon: 'v-md-icon-ul',
  title: (editor) => editor.langConfig.ul.toolbar,
  action(editor) {
    editor.execCommand(ul);
  },
};
