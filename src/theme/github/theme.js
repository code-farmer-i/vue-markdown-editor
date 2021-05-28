import createHljsTheme from '@/theme/base/highlight';

export default function createGithubTheme(config) {
  const hljsTheme = createHljsTheme({
    Hljs: config.Hljs,
    codeHighlightExtensionMap: config.codeHighlightExtensionMap || {},
    baseConfig: config.baseConfig,
    codeBlockClass: config.codeBlockClass || ((lang) => `v-md-hljs-${lang}`),
  });

  return {
    previewClass: 'github-markdown-body',
    extend(callback) {
      hljsTheme.extend(callback);
    },
    markdownParser: hljsTheme.markdownParser,
  };
}
