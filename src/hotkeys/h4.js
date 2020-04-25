import { h4 } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: '4',
  action(editor) {
    editor.execCommand(h4);
  },
};
