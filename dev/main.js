import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/base-editor';
import githubTheme from '@/theme/github';
import tipPlugin from '@/plugins/tip';

VueMarkdownEditor.usePlugins([tipPlugin({ icon: 'aa' })]);
// import vuepressTheme from '@/theme/vuepress';

VueMarkdownEditor.useTheme(githubTheme);
// VueMarkdownEditor.useTheme(vuepressTheme);

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
