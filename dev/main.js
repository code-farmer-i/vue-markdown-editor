import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/base-editor';
// import VueMarkdownEditor from '@/codemirror-editor';
import Preview from '@/preview';
// import githubTheme from '@/theme/github/index';

import vuepressTheme from '@/theme/vuepress';

vuepressTheme.configure((md) => {
  console.log(md);
  md.core.ruler.before('linkify', 'curly_attributes', (state) => {
    console.log(state);
  });
});

// VueMarkdownEditor.use(githubTheme);
VueMarkdownEditor.use(vuepressTheme);
Preview.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
