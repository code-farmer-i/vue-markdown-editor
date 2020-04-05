import { name } from '@/command/image';

export default {
  name,
  icon: 'fa fa-md-picture-o',
  title: '添加图片链接',
  action(editor) {
    editor.execCommand(name);
  },
};
