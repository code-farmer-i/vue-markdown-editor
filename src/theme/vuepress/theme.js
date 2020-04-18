import markdownItPrism from '@/utils/markdown-it-prism';
import MarkdownItLink from '@/utils/markdown-it-link';
import MarkdownItAttr from 'markdown-it-attrs';

// style
import '@/assets/css/vuepress-markdown';

const { mdIt, prism } = markdownItPrism({
  codeBlockClass: (lang) => `v-md-prism-${lang}`,
});

mdIt
  .use(MarkdownItLink, {
    externalAttrs: {
      target: '_blank',
    },
    openLinkIcon: true,
    openLinkIconClass: 'v-md-icon-open-in-new',
  })
  .use(MarkdownItAttr, {
    allowedAttributes: ['width', 'height'],
  });

export default {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownParser: mdIt,
};
