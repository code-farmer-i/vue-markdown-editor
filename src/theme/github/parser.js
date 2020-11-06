import createGithubTheme from './theme';

export default function (vMdParser, options = {}) {
  const { extend, config, codeHighlightExtensionMap } = options;
  const theme = createGithubTheme({
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  vMdParser.theme(theme);
}
