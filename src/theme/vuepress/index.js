import createVuepressTheme from './theme';
import createTipPlugin from '@/plugins/tip/index';

// style
import '@/assets/css/theme/base';
import '@/assets/css/theme/vuepress-markdown';

// tip plugin style
import '@/plugins/tip/tip.css';

const install = function (VMdEditor, options = {}) {
  const { extend, config, codeHighlightExtensionMap, Prism } = options;
  const theme = createVuepressTheme({
    Prism,
    baseConfig: config,
    codeHighlightExtensionMap,
  });
  const tipPlugin = createTipPlugin();

  if (extend) theme.extend(extend);
  VMdEditor.use(tipPlugin);
  VMdEditor.theme(theme);
};

export default {
  install,
};
