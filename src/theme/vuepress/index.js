import createVuepressTheme from './theme';
import createTipPlugin from '@/plugins/tip/index';
import '@/plugins/tip/tip.css';

const install = function (VMdEditor, options = {}) {
  const { extend, config } = options;
  const theme = createVuepressTheme({
    baseConfig: config,
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
