# vuepress 主题

## 介绍

markdown 解析使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来实现，代码块解析使用 [prism](https://github.com/PrismJS/prism) 来实现。

效果如下：

<ClientOnly>
  <vuepress-theme />
</ClientOnly>

## 内置功能

vuepress 主题内置扩展了 tip 功能。同时你也可以在 left-toolbar 属性中配置 tip 来快捷插入。

效果如下：

<ClientOnly>
  <vuepress-theme-tip />
</ClientOnly>

示例代码：

```html
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | tip" height="500px" />
</template>

<script>
  const text = `::: tip
  你可以点击 toolbar 中的 tip 来快速插入
:::

::: warning
  这是一段警告
:::

::: danger
  这是一个危险警告
:::

::: details
  这是一个详情块，在 IE / Edge 中不生效
:::

::: tip 自定义标题
  你也可以自定义块中的标题
:::

::: danger STOP
  危险区域，禁止通行
:::
`;

  export default {
    data() {
      return {
        text,
      };
    },
  };
</script>
```

## 扩展

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme, {
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  },
});
```

## 扩展语言包

主题包默认只支持了 markup, html, xml, svg, mathml, css, clike, jacascript(js)。以免引入太多冗余代码导致包的体积过大。如果需要支持更多的语言代码高亮，请通过[babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs)插件按需引入对应的语言包。

安装 `babel-plugin-prismjs` 插件

```bash
# yarn
yarn add babel-plugin-prismjs --dev

# npm
npm install babel-plugin-prismjs
```

按需引入语言包（推荐）

```js
// babel.config.js
{
  "plugins": [
    ["prismjs", {
        "languages": ["json"],
    }]
  ]
}
```

引入所有语言包（不推荐）

```js
// babel.config.js
const components = require('prismjs/components');
const allLanguages = Object.keys(components.languages).filter((item) => item !== 'meta');

module.exports = {
  plugins: [
    [
      'prismjs',
      {
        languages: allLanguages,
      },
    ],
  ],
};
```

[查看 prism 支持的语言包](https://github.com/PrismJS/prism/tree/master/components)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
