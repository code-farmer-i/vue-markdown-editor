import { quote } from '@/utils/constants/command';

export default {
  name: quote,
  icon: 'v-md-icon-quote',
  title: (editor) => `${editor.langConfig.quote.toolbar}（Ctrl+Q）`,
  action(editor) {
    editor.execCommand(quote);
  },
};
