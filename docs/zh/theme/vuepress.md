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

主题包默认只支持了 markup, html, xml, svg, mathml, css, clike, jacascript(js)。以免引入太多冗余代码导致包的体积过大。如果需要支持更多的语言代码高亮，请按需引入对应的语言包。

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// 直接按需引入 prism 的语言包即可，此处以 json 为例
import 'prismjs/components/prism-json';

VueMarkdownEditor.use(vuepressTheme);
```

::: warning 注意
语言包需要在引入主题之后引入，否则不会生效。
:::

[查看 prism 支持的语言包](https://github.com/PrismJS/prism/tree/master/components)

扩展后就能支持对应的代码块高亮了，如下

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
