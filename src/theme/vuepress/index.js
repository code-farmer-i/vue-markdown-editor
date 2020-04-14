import theme from './theme';
import createTipPlugin from '@/plugins/tip';

const tipPlugin = createTipPlugin({ icon: 'v-md-icon-tip' });

const install = function (VMdEditor) {
  VMdEditor.use(tipPlugin);

  VMdEditor.theme(theme);
};

export default {
  ...theme,
  markdownExtenders: [tipPlugin.extendMarkdown],
  install,
};
