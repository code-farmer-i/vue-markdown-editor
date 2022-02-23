import { ol } from '@/utils/constants/command';

export default {
  name: ol,
  icon: 'v-md-icon-ol',
  title: (editor) => editor.langConfig.ol.toolbar,
  action(editor) {
    editor.execCommand(ol);
  },
};
