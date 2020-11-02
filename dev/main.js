import App from './App';
import { createApp } from 'vue';
// import VueMarkdownEditor from '@/base-editor';
import VueMarkdownEditor from '@/codemirror-editor';
// import Preview from '@/preview';
import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import createKatexPlugin from '@/plugins/katex/cdn';
import createTodoListPlugin from '@/plugins/todo-list/index';
import createLineNumberPlugin from '@/plugins/line-number/index';
import createCopyCodePlugin from '@/plugins/copy-code/index';
import createHighLinesPlugin from '@/plugins/highlight-lines/';

import vuepressTheme from '@/theme/vuepress';
import enUS from '@/lang/en-US';

// codemirror 编辑器的相关资源
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

const app = createApp(App);

VueMarkdownEditor.lang.use('en-US', enUS);

// VueMarkdownEditor.use(githubTheme);
VueMarkdownEditor.use(vuepressTheme);
// Preview.use(githubTheme);

VueMarkdownEditor.use(createEmojiPlugin())
  .use(createKatexPlugin())
  .use(createTodoListPlugin())
  .use(createLineNumberPlugin())
  .use(createCopyCodePlugin())
  .use(createHighLinesPlugin());

VueMarkdownEditor.Codemirror = Codemirror;

app.use(VueMarkdownEditor);
// app.use(Preview);

app.mount('#app');
