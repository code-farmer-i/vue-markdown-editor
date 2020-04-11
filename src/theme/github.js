import hljs from '@/utils/highlight';
import markdownIt from '@/utils/markdown-it';

// style
import '@/assets/css/github-markdown';

const markdownItInstance = markdownIt({
  highlight(str, lang) {
    let res = markdownItInstance.utils.escapeHtml(str);

    if (lang && hljs.getLanguage(lang)) {
      res = hljs.highlight(lang, str).value;
    }

    return `<pre class="v-md-hljs-${lang}"><code>${res}</code></pre>`;
  },
});

const theme = {
  previewClass: 'github-markdown-body',
  configure(callback) {
    callback(markdownItInstance, hljs);
  },
  markdownLoader(text) {
    return markdownItInstance.render(text);
  },
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.useTheme(theme);
}

export default theme;
