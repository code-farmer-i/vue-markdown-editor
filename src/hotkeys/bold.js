import { bold } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'b',
  action(editor) {
    editor.execCommand(bold);
  },
};
