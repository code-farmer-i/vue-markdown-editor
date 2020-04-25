import { quote } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'q',
  action(editor) {
    editor.execCommand(quote);
  },
};
