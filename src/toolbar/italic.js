import { name } from '@/command/italic';

export default {
  name,
  icon: 'v-md-icon-italic',
  title: '斜体',
  action(editor) {
    editor.execCommand(name);
  },
};
