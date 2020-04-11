import markdownItHljs from '@/plugins/markdown-it-hljs';

// style
import '@/assets/css/github-markdown';

const { mdIt, hljs } = markdownItHljs({
  codeBlockClass: (lang) => `v-md-hljs-${lang}`,
});

const theme = {
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(mdIt, hljs);
  },
  markdownLoader(text) {
    return mdIt.render(text);
  },
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.useTheme(theme);
}

export default theme;
