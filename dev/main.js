import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '../src';
import highlighjs from './highlightjs';
import 'highlight.js/styles/github';

import 'github-markdown-css';

VueMarkdownEditor.markdownIt.set({
  breaks: true,
  highlight(str, lang) {
    let res = VueMarkdownEditor.markdownIt.utils.escapeHtml(str);

    if (lang && highlighjs.getLanguage(lang)) {
      try {
        res = highlighjs.highlight(lang, str).value;
      } catch (e) {}
    }

    return `<pre class="language-${lang}"><code>${res}</code></pre>`;
  },
});

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
