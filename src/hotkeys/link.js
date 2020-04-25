import { link } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'l',
  action(editor) {
    editor.execCommand(link);
  },
};
