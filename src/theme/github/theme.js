import markdownItHljs from '@/utils/markdown-it-hljs';
import markdownItLink from '@/utils/markdown-it-link';
import markdownItAttr from 'markdown-it-attrs';
import markdownItLineNumber from '@/utils/markdown-it-line-number';
import markdownItAnchor from '@/utils/markdown-it-anchor';

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
  .use(markdownItAnchor)
  .use(markdownItLineNumber);

export default {
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(mdIt, hljs);
  },
  markdownParser: mdIt,
};
