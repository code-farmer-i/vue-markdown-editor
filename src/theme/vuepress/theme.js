import markdownItPrism from '@/utils/markdown-it-prism';

// style
import '@/assets/css/vuepress-markdown';

const { mdIt, prism } = markdownItPrism({
  codeBlockClass: (lang) => `v-md-prism-${lang}`,
});

export default {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownParser: mdIt,
};
