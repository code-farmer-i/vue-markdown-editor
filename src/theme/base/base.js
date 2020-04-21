import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItHeadingTag from '@/utils/markdown-it-heading-tag';
import markdownItTableOfContent from '@/utils/markdown-it-table-of-content';
import { kebabCase } from '@/utils/util';

// style
import '@/assets/css/theme/base';

import markdownIt from '@/utils/markdown-it';

export default function createBaseTheme() {
  const mdIt = markdownIt();

  mdIt

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
    .use(markdownItLineNumber, {
      lineMarkup: 'data-v-md-line',
    });

  return {
    previewClass: 'markdown-body',
    configure(callback) {
      callback(mdIt);
    },
    markdownParser: mdIt,
  };
}
