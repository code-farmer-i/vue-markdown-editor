import { hr } from '@/utils/constants/command';

export default {
  name: hr,
  icon: 'v-md-icon-horizontal',
  title: '插入分割线',
  action(editor) {
    editor.execCommand(hr);
  },
};
