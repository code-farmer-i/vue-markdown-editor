import createGithubTheme from './theme';

export default function (vMdParser, options = {}) {
  const { extend, config } = options;
  const theme = createGithubTheme({
    baseConfig: config,
  });

  if (extend) theme.extend(extend);
  vMdParser.theme(theme);
}
