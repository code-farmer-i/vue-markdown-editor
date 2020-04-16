import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/base-editor';
// import VueMarkdownEditor from '@/codemirror-editor';
import Preview from '@/preview';
import githubTheme from '@/theme/github/index';

// import vuepressTheme from '@/theme/vuepress';

// VueMarkdownEditor.use(githubTheme);
// VueMarkdownEditor.use(vuepressTheme);
Preview.use(githubTheme);

Vue.use(VueMarkdownEditor);
Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
