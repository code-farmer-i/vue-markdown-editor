import { h6 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '6',
  action(editor) {
    editor.execCommand(h6);
  },
};
