import markdownItPrism from '@/utils/markdown-it-prism';
import tip from '@/plugins/tip';

// style
import '@/assets/css/vuepress-markdown';

const { mdIt, prism } = markdownItPrism({
  codeBlockClass: (lang) => `v-md-prism-${lang}`,
});

const theme = {
  previewClass: 'vuepress-markdown-body',
  plugins: [tip({ icon: 'v-md-icon-tip' })],
  configure(callback) {
    callback(mdIt, prism);
  },
  markdownParser: mdIt,
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.useTheme(theme);
}

export default theme;
