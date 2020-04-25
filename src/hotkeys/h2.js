import { h2 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '2',
  action(editor) {
    editor.execCommand(h2);
  },
};
