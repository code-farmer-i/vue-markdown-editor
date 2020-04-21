import createPrismTheme from '@/theme/base/prism';
import markdownItLink from '@/utils/markdown-it-link';

// style
import '@/assets/css/theme/vuepress-markdown';

const prismTheme = createPrismTheme({
  codeBlockClass: (lang) => `v-md-prism-${lang}`,
});

prismTheme.configure((md) => {
  md.use(markdownItLink, {
    externalAttrs: {
      target: '_blank',
    },
    openLinkIcon: true,
    openLinkIconClass: 'v-md-icon-open-in-new',
  });
});

export default {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    prismTheme.configure(callback);
  },
  markdownParser: prismTheme.markdownParser,
};
