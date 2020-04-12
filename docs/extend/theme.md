# 基于现有的主题扩展

## github 主题

markdown 解析使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来实现，代码块解析使用 [highlight.js](https://github.com/highlightjs/highlight.js) 来实现。

主题包默认只支持了 js(javascript), xml(html), css。以免引入太多冗余代码导致包的体积过大。

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
// 按需引入 highlightjs 的语言包，此处以 json 为例
import json from 'highlight.js/lib/languages/json';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

githubTheme.configure((md, hljs) => {
  // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  // md.set(option).use(plugin);
  // 注册语言包
  hljs.registerLanguage('json', json);
});

VueMarkdownEditor.useTheme(githubTheme);
```

[查看 highlight.js 支持的语言包](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-github-theme />
</ClientOnly>

## vuepress 主题

markdown 解析使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来实现，代码块解析使用 [prism](https://github.com/PrismJS/prism) 来实现。

默认支持 markup, html, xml, svg, mathml, css, clike, jacascript(js)

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// 直接按需引入 prism 的语言包即可
import 'prismjs/components/prism-json';

VueMarkdownEditor.useTheme(vuepressTheme);
```

[查看 prism 支持的语言包](https://github.com/PrismJS/prism/tree/master/components)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
