import { name } from '@/command/image';

export default {
  name,
  icon: 'v-md-icon-img',
  title: '添加图片链接',
  action(editor) {
    editor.execCommand(name);
  },
};
