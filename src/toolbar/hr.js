import { hr } from '@/utils/constants/command';

export default {
  name: hr,
  icon: 'v-md-icon-horizontal',
  title: (editor) => editor.langConfig.hr.toolbar,
  action(editor) {
    editor.execCommand(hr);
  },
};
