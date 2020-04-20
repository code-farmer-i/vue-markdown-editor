import markdownItPrism from '@/utils/markdown-it-prism';
import markdownItLink from '@/utils/markdown-it-link';
import markdownItPreWrapper from '@/utils/markdown-it-pre-wrapper';
import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';

// style
import '@/assets/css/vuepress-markdown';

const { mdIt, prism } = markdownItPrism({
  codeBlockClass: (lang) => `v-md-prism-${lang}`,
});

mdIt
  .use(markdownItLink, {
    externalAttrs: {
      target: '_blank',
    },
    openLinkIcon: true,
    openLinkIconClass: 'v-md-icon-open-in-new',
  })
  .use(markdownItAttr, {
    allowedAttributes: ['width', 'height'],
  })
  .use(markdownItPreWrapper, {
    languagePrefix: 'v-md-prism',
  })
  .use(markdownItLineNumber);

export default {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownParser: mdIt,
};
