import markdownItHljs from '@/utils/markdown-it-hljs';
import MarkdownItLink from '@/utils/markdown-it-link';

// style
import '@/assets/css/github-markdown';

const { mdIt, hljs } = markdownItHljs({
  codeBlockClass: (lang) => `v-md-hljs-${lang}`,
});

mdIt.use(MarkdownItLink, {
  externalAttrs: {
    target: '_blank',
  },
});

export default {
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(mdIt, hljs);
  },
  markdownParser: mdIt,
};
