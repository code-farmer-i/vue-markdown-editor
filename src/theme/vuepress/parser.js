import createVuepressTheme from './theme';

export default function (vMdParser, options = {}) {
  const { extend, config, codeHighlightExtensionMap, Prism } = options;
  const theme = createVuepressTheme({
    Prism,
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  vMdParser.theme(theme);
}
