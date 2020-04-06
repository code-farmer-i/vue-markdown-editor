import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '../src';
import 'highlight.js/styles/github';
import 'github-markdown-css';
import bash from 'highlight.js/lib/languages/bash';

VueMarkdownEditor.hljs.registerLanguage('bash', bash);

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
