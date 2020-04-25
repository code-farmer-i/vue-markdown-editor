import { ul } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'u',
  action(editor) {
    editor.execCommand(ul);
  },
};
