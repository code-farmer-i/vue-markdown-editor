import App from './App';
import Vue from 'vue';
import VueMarkdownEditor, { xss } from '@/base-editor';
// import VueMarkdownEditor from '@/codemirror-editor';
// import Preview from '@/preview';
// import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import createKatexPlugin from '@/plugins/katex/cdn';
import createTodoListPlugin from '@/plugins/todo-list/index';
import createLineNumberPlugin from '@/plugins//line-number/index';

import vuepressTheme from '@/theme/vuepress';

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
console.log(VueMarkdownEditor.markdownParser.render('<img onerror>'));
// Preview.use(githubTheme);

Vue.use(VueMarkdownEditor);

// Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
