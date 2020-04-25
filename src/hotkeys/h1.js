import { h1 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '1',
  action(editor) {
    editor.execCommand(h1);
  },
};
