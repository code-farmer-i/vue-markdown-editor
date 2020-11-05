import createPrismTheme from '@/theme/base/prism';

// style
import '@/assets/css/theme/vuepress-markdown';

export default function createVuepressTheme(config) {
  const prismTheme = createPrismTheme({
    codeHighlightExtensionMap: config.codeHighlightExtensionMap || {},
    codeBlockClass: config.codeBlockClass || ((lang) => `v-md-prism-${lang}`),
    baseConfig: {
      link: {
        openLinkIcon: true,
        openLinkIconClass: 'v-md-icon-open-in-new',
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
