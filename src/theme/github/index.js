import parser from './parser';

// style
import '@/assets/css/theme/base';
import '@/assets/css/theme/github-markdown';

const install = function (VMdEditor, options) {
  VMdEditor.vMdParser.use(parser, options);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  install,
};
