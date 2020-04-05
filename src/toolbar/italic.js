import { name } from '@/command/italic';

export default {
  name,
  icon: 'fa fa-md-italic',
  title: '斜体',
  action(editor) {
    editor.execCommand(name);
  },
};
