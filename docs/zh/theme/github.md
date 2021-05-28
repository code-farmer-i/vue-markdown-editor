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
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js/lib';
// 按需引入代码高亮的语言包并注册
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// language js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// language xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// language css
hljs.registerLanguage('css', cssLanguage);

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
});
```

[查看 highlight.js 支持的语言包](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-github-theme />
</ClientOnly>
