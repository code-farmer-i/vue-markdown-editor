import { ol } from '@/utils/constants/command';

export default {
  name: ol,
  icon: 'v-md-icon-ol',
  title: (editor) => `${editor.langConfig.ol.toolbar}（Ctrl+O）`,
  action(editor) {
    editor.execCommand(ol);
  },
};
