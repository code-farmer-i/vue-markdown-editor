import markdownItPrism from '@/utils/markdown-it-prism';
import markdownItLink from '@/utils/markdown-it-link';
import markdownItPreWrapper from '@/utils/markdown-it-pre-wrapper';
import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItHeadingTag from '@/utils/markdown-it-heading-tag';
import markdownItTableOfContent from '@/utils/markdown-it-table-of-content';
import { kebabCase } from '@/utils/util';

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
  .use(markdownItHeadingTag, {
    getMarks(title) {
      return [
        {
          attr: 'data-v-md-heading',
          value: encodeURIComponent(kebabCase(title)),
        },
      ];
    },
  })
  .use(markdownItTableOfContent, {
    listClass: 'v-md-toc',
    listItemClass: 'v-md-toc-item',
    getAnchorAttrs(title) {
      return [
        {
          attr: 'data-v-md-anchor',
          value: encodeURIComponent(kebabCase(title)),
        },
      ];
    },
  })
  .use(markdownItLineNumber);

export default {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownParser: mdIt,
};
