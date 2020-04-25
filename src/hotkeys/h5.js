import { h5 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '5',
  action(editor) {
    editor.execCommand(h5);
  },
};
