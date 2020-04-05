import { name } from '@/command/h5';

export default {
  name,
  text: 'H5',
  title: '五级标题',
  action(editor) {
    editor.execCommand(name);
  },
};
