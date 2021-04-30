import App from './App';
import Vue from 'vue';
// import VueMarkdownEditor from '@/base-editor';
import VueMarkdownEditor from '@/codemirror-editor';

import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
// import Preview from '@/preview';
import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import createKatexPlugin from '@/plugins/katex/cdn';
import createTodoListPlugin from '@/plugins/todo-list/index';
import createLineNumberPlugin from '@/plugins/line-number/index';
import createCopyCodePlugin from '@/plugins/copy-code/index';
import createHighLinesPlugin from '@/plugins/highlight-lines/';
import createMermaidPlugin from '@/plugins/mermaid/npm';

import vuepressTheme from '@/theme/vuepress';
import enUS from '@/lang/en-US';

VueMarkdownEditor.Codemirror = Codemirror;
VueMarkdownEditor.lang.use('en-US', enUS);

VueMarkdownEditor.use(createEmojiPlugin())
  .use(createKatexPlugin())
  .use(createTodoListPlugin())
  .use(createLineNumberPlugin())
  .use(createCopyCodePlugin())
  .use(createHighLinesPlugin())
  .use(createMermaidPlugin());

VueMarkdownEditor.use(githubTheme, {
  codeHighlightExtensionMap: {
    vue: 'xml',
  },
});
// VueMarkdownEditor.use(vuepressTheme, {
//   codeHighlightExtensionMap: {
//     vue: 'html',
//   },
// });
// Preview.use(githubTheme);

Vue.use(VueMarkdownEditor);

// Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
