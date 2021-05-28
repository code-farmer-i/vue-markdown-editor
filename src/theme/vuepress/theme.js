import createPrismTheme from '@/theme/base/prism';

export default function createVuepressTheme(config) {
  const prismTheme = createPrismTheme({
    Prism: config.Prism,
    codeHighlightExtensionMap: config.codeHighlightExtensionMap || {},
    codeBlockClass: config.codeBlockClass || ((lang) => `v-md-prism-${lang}`),
    baseConfig: {
      link: {
        openLinkIcon: true,
      },
      ...config.baseConfig,
    },
  });

  return {
    previewClass: 'vuepress-markdown-body',
    extend(callback) {
      prismTheme.extend(callback);
    },
    markdownParser: prismTheme.markdownParser,
  };
}
