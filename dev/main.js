import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/codemirror-editor';
import githubTheme from '@/theme/github';

VueMarkdownEditor.useTheme(githubTheme);

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
