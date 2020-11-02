import parser from './parser';
import createTipPlugin from '@/plugins/tip/index';

// style
import '@/assets/css/theme/vuepress-markdown';

const install = function (VMdEditor, options) {
  const tipPlugin = createTipPlugin();

  VMdEditor.vMdParser.use(parser, options);
  VMdEditor.use(tipPlugin);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  install,
};
