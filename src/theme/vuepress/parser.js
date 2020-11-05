import createVuepressTheme from './theme';

export default function (vMdParser, options = {}) {
  const { extend, config, codeHighlightExtensionMap } = options;
  const theme = createVuepressTheme({
    baseConfig: config,
    codeHighlightExtensionMap,
  });

  if (extend) theme.extend(extend);
  vMdParser.theme(theme);
}
