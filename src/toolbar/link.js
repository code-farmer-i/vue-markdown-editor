import { link } from '@/utils/constants/command';

export default {
  name: link,
  icon: 'v-md-icon-link',
  title: (editor) => editor.langConfig.link.toolbar,
  action(editor) {
    editor.execCommand(link);
  },
};
