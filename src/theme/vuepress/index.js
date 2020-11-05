import createVuepressTheme from './theme';
import createTipPlugin from '@/plugins/tip/index';

const install = function (VMdEditor, options = {}) {
  const { extend, config, codeHighlightExtensionMap } = options;
  const theme = createVuepressTheme({
    baseConfig: config,
    codeHighlightExtensionMap,
  });
  const tipPlugin = createTipPlugin();

  if (extend) theme.extend(extend);
  VMdEditor.use(tipPlugin);
  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  install,
};
