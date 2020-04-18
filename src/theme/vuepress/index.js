import theme from './theme';
import createTipPlugin from '@/plugins/tip/index';
import '@/plugins/tip/tip.css';

const tipPlugin = createTipPlugin();

const install = function (VMdEditor) {
  VMdEditor.use(tipPlugin);

  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  ...theme,
  markdownExtenders: [tipPlugin.extendMarkdown],
  install,
};
