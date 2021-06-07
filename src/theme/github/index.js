import createGithubTheme from './theme';

// style
import '@/assets/css/theme/base';
import '@/assets/css/theme/github-markdown';

const install = function (VMdEditor, options = {}) {
  const { extend, config, codeHighlightExtensionMap, Hljs } = options;
  const theme = createGithubTheme({
    Hljs,
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  VMdEditor.theme(theme);
};

export default {
  install,
};
