import Prism from 'prismjs';
import markdownIt from '@/utils/markdown-it';

// style
import '@/assets/css/vuepress-markdown';

const markdownItInstance = markdownIt({
  highlight(str, lang) {
    let res = markdownItInstance.utils.escapeHtml(str);

    if (lang && Prism.languages[lang]) {
      res = Prism.highlight(str, Prism.languages[lang], lang);
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

const theme = {
  previewClass: 'vuepress-markdown-body',
  configure(callback) {
    callback(markdownItInstance, Prism);
  },
  markdownLoader(text) {
    return markdownItInstance.render(text);
  },
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.useTheme(theme);
}

export default theme;
