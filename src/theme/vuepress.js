import markdownItPrism from '@/plugins/markdown-it-prism';

// style
import '@/assets/css/vuepress-markdown';

const { mdIt, prism } = markdownItPrism({
  codeBlockClass: (lang) => `v-md-hljs-${lang}`,
});

const theme = {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownLoader(text) {
    return mdIt.render(text);
  },
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.useTheme(theme);
}

export default theme;
