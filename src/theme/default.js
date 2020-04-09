// markdown-it
import MarkdownIt from 'markdown-it';

// hljs
import hljs from 'highlight.js/lib/highlight.js';
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// style
import 'github-markdown-css';
import 'highlight.js/styles/github';

// language js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// language xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// language css
hljs.registerLanguage('css', cssLanguage);

const markdownItInstance = new MarkdownIt();

markdownItInstance.set({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: false,
  typographer: true,
  highlight(str, lang) {
    let res = markdownItInstance.utils.escapeHtml(str);

    if (lang && hljs.getLanguage(lang)) {
      res = hljs.highlight(lang, str).value;
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

export default {
  previewClass: 'markdown-body',
  configure(callback) {
    callback(markdownItInstance, hljs);
  },
  markdownLoader(text) {
    return markdownItInstance.render(text);
  },
};
