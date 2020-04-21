import markdownItHljs from '@/utils/markdown-it-hljs';
import markdownItLink from '@/utils/markdown-it-link';
import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItHeadingTag from '@/utils/markdown-it-heading-tag';
import markdownItTableOfContent from '@/utils/markdown-it-table-of-content';
import { kebabCase } from '@/utils/util';

// style
import '@/assets/css/github-markdown';

const { mdIt, hljs } = markdownItHljs({
  codeBlockClass: (lang) => `v-md-hljs-${lang}`,
});

mdIt
  .use(markdownItLink, {
    externalAttrs: {
      target: '_blank',
    },
  })
  .use(markdownItAttr, {
    allowedAttributes: ['width', 'height'],
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
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(mdIt, hljs);
  },
  markdownParser: mdIt,
};
