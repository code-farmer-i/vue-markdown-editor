import { ol } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'o',
  action(editor) {
    editor.execCommand(ol);
  },
};
