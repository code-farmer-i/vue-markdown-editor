import createHljsTheme from '@/theme/base/highlight';
import markdownItLink from '@/utils/markdown-it-link';

// style
import '@/assets/css/theme/github-markdown';

const hljsTheme = createHljsTheme({
  codeBlockClass: (lang) => `v-md-hljs-${lang}`,
});

hljsTheme.configure((md) => {
  md.use(markdownItLink, {
    externalAttrs: {
      target: '_blank',
    },
  });
});

export default {
  previewClass: 'github-markdown-body',
  configure(callback) {
    hljsTheme.configure(callback);
  },
  markdownParser: hljsTheme.markdownParser,
};
