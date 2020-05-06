# github 主题

## 介绍

markdown 解析使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来实现，代码块解析使用 [highlight.js](https://github.com/highlightjs/highlight.js) 来实现。

效果如下：

<ClientOnly>
  <base-editor />
</ClientOnly>

## 扩展

主题包默认只支持了 js(javascript), xml(html), css。以免引入太多冗余代码导致包的体积过大。如果需要支持更多的语言代码高亮，请按需引入对应的语言包。

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
// 按需引入 highlightjs 的语言包，此处以 json 为例
import json from 'highlight.js/lib/languages/json';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

VueMarkdownEditor.use(githubTheme, {
  extend(md, hljs) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
    // 注册语言包
    hljs.registerLanguage('json', json);
  },
});
```

[查看 highlight.js 支持的语言包](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-github-theme />
</ClientOnly>
