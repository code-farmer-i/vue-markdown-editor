import createGithubTheme from './theme';

const install = function (VMdEditor, options = {}) {
  const { extend, config, codeHighlightExtensionMap } = options;
  const theme = createGithubTheme({
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  install,
};
