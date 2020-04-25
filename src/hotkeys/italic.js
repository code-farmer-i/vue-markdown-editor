import { italic } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'i',
  action(editor) {
    editor.execCommand(italic);
  },
};
