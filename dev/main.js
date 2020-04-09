import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/editor';
import vuepressTheme from '@/theme/vuepress';

VueMarkdownEditor.useTheme(vuepressTheme);

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
