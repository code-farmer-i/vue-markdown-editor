import createGithubTheme from './theme';

export default function (vMdParser, options = {}) {
  const { extend, config, codeHighlightExtensionMap, Hljs } = options;
  const theme = createGithubTheme({
    Hljs,
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  vMdParser.theme(theme);
}
