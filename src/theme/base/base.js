import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItHeadingTag from '@/utils/markdown-it-heading-tag';
import markdownItTableOfContent from '@/utils/markdown-it-table-of-content';
import markdownItPreWrapper from '@/utils/markdown-it-pre-wrapper';
import { LINE_MARKUP, HEADING_MARKUP, ANCHOR_MARKUP } from '@/utils/constants/markup';
import slugify from '@vuepress/shared-utils/lib/slugify';

// style
import '@/assets/css/theme/base';

import markdownIt from '@/utils/markdown-it';

export default function createBaseTheme() {
  const mdIt = markdownIt();

  mdIt
    .use(markdownItPreWrapper, {
      getWrapperClass(lang) {
        return `v-md-pre-wrapper-${lang}`;
      },
    })
    .use(markdownItAttr, {
      allowedAttributes: ['width', 'height'],
    })
    .use(markdownItHeadingTag, {
      getMarks(title, level, unique) {
        return [
          {
            attr: HEADING_MARKUP,
            value: `${slugify(title)}${unique ? `-${unique}` : ''}`,
          },
        ];
      },
    })
    .use(markdownItTableOfContent, {
      listClass: 'v-md-toc',
      listItemClass: 'v-md-toc-item',
      getAnchorAttrs(title, level, unique) {
        return [
          {
            attr: ANCHOR_MARKUP,
            value: `${slugify(title)}${unique ? `-${unique}` : ''}`,
          },
        ];
      },
    })
    .use(markdownItLineNumber, {
      lineMarkup: LINE_MARKUP,
    });

  return {
    previewClass: 'markdown-body',
    configure(callback) {
      callback(mdIt);
    },
    markdownParser: mdIt,
  };
}
