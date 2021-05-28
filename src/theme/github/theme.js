import createHljsTheme from '@/theme/base/highlight';

export default function createGithubTheme(config) {
  const hljsTheme = createHljsTheme({
    Hljs: config.Hljs,
    baseConfig: config.baseConfig,
    codeBlockClass: config.codeBlockClass || ((lang) => `v-md-hljs-${lang}`),
    codeHighlightExtensionMap: config.codeHighlightExtensionMap || {},
  });

  return {
    previewClass: 'github-markdown-body',
    extend(callback) {
      hljsTheme.extend(callback);
    },
    markdownParser: hljsTheme.markdownParser,
  };
}
