# github 主题

## 介绍

markdown 解析使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来实现，代码块解析使用 [highlight.js](https://github.com/highlightjs/highlight.js) 来实现。

效果如下：

<ClientOnly>
  <base-editor />
</ClientOnly>

## 扩展 markdown-it

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
});
```

## 引入代码高亮语言包

按需引入语言包（推荐）

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});
```

引入所有语言包（不推荐）

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// 引入所有语言包
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});
```

[查看 highlight.js 支持的语言包](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-github-theme />
</ClientOnly>
