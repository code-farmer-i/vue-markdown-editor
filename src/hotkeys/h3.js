import { h3 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '3',
  action(editor) {
    editor.execCommand(h3);
  },
};
