# VuePress

## Introduction

example：

<ClientOnly>
  <vuepress-theme />
</ClientOnly>

## Built-in functions

The vuepress theme has built-in extended tip functionality. At the same time, you can also configure tip in the left-toolbar property to insert quickly.

<ClientOnly>
  <vuepress-theme-tip />
</ClientOnly>

demo：

```html
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | tip" height="500px" />
</template>

<script>
  const text = `::: tip 
  You can click on the tip in the toolbar to quickly insert
:::

::: warning
  This is a warning
:::

::: danger
  This is a danger warning
:::

::: details
  This is a detail block and does not take effect in IE / Edge
:::

::: tip Custom title
  You can also customize the title
:::

::: danger STOP
  Hazardous areas, no traffic
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

## Expand

The theme package only supports markup, html, xml, svg, mathml, css, clike, jacascript(js) by default. In order to avoid introducing too much redundant code, the package size is too large. If you need to support more language code highlighting, please introduce the corresponding language pack as needed.

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// Introduce prism language packs as needed, here is json as an example
import 'prismjs/components/prism-json';

VueMarkdownEditor.use(vuepressTheme);
```

::: warning
Language packs need to be introduced after the introduction of the theme, otherwise it will not take effect.
:::

[View languages supported by prism](https://github.com/PrismJS/prism/tree/master/components)

After expansion, the corresponding code block can be highlighted.

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
