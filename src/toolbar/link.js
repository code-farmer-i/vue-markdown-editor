import { link } from '@/utils/constants/command';

export default {
  name: link,
  icon: 'v-md-icon-link',
  title: (editor) => `${editor.langConfig.link.toolbar}（Ctrl+L）`,
  action(editor) {
    editor.execCommand(link);
  },
};
