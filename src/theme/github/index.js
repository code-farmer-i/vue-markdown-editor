import createGithubTheme from './theme';

const install = function (VMdEditor, options = {}) {
  const { extend, config } = options;
  const theme = createGithubTheme({
    baseConfig: config,
  });

  if (extend) theme.extend(extend);
  VMdEditor.theme(theme);
  VMdEditor.markdownParser = theme.markdownParser;
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  install,
};
