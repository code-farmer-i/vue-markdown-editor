import { name } from '@/command/strikethrough';

export default {
  name,
  icon: 'fa fa-md-strikethrough',
  title: '删除线',
  action(editor) {
    editor.execCommand(name);
  },
};
