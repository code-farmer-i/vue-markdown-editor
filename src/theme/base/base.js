import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItHeadingTag from '@/utils/markdown-it-heading-tag';
import markdownItTableOfContent from '@/utils/markdown-it-table-of-content';
import markdownItPreWrapper from '@/utils/markdown-it-pre-wrapper';
import { LINE_MARKUP, HEADING_MARKUP, ANCHOR_MARKUP } from '@/utils/constants';
import { kebabCase } from '@/utils/util';

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
      getMarks(title) {
        return [
          {
            attr: HEADING_MARKUP,
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
            attr: ANCHOR_MARKUP,
            value: encodeURIComponent(kebabCase(title)),
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
