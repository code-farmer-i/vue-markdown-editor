import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '../src/codemirror-editor';
import 'highlight.js/styles/github';
import hljs from 'highlight.js/lib/highlight.js';
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';
import 'github-markdown-css';
import bash from 'highlight.js/lib/languages/bash';

// js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// css
hljs.registerLanguage('css', cssLanguage);

hljs.registerLanguage('bash', bash);

VueMarkdownEditor.markdownIt.set({
  highlight(str, lang) {
    let res = VueMarkdownEditor.markdownIt.utils.escapeHtml(str);

    if (lang && hljs.getLanguage(lang)) {
      res = hljs.highlight(lang, str).value;
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
