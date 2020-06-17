import App from './App';
import Vue from 'vue';
import VueMarkdownEditor from '@/base-editor';
// import VueMarkdownEditor from '@/codemirror-editor';
// import Preview from '@/preview';
// import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import createKatexPlugin from '@/plugins/katex/cdn';
import createTodoListPlugin from '@/plugins/todo-list/index';
import createLineNumberPlugin from '@/plugins/line-number/index';

import vuepressTheme from '@/theme/vuepress';
import enUS from '@/lang/en-US';

VueMarkdownEditor.lang.use('en-US', enUS);

VueMarkdownEditor.use(createEmojiPlugin())
  .use(createKatexPlugin())
  .use(createTodoListPlugin())
  .use(createLineNumberPlugin());

// VueMarkdownEditor.use(githubTheme, {
//   config: {
//     toc: {
//       includeLevel: [3, 4],
//     },
//   },
// });
VueMarkdownEditor.use(vuepressTheme);
// Preview.use(githubTheme);

Vue.use(VueMarkdownEditor);

// Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
