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

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme, {
  extend(md) {
    // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
    // md.set(option).use(plugin);
  },
});
```

## Extended language pack

The theme package only supports markup, html, xml, svg, mathml, css, clike, jacascript(js) by default. So as not to introduce too much redundant code to cause the package to be too large. If you need to support more language code highlighting, please use the [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) plug-in to introduce the corresponding language packs on demand.

Install the `babel-plugin-prismjs` plugin

```bash
# yarn
yarn add babel-plugin-prismjs --dev

# npm
npm install babel-plugin-prismjs
```

Introduce language packs on demand (recommended)

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

Introduce all language packs (not recommended)

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

[View languages supported by prism](https://github.com/PrismJS/prism/tree/master/components)

After expansion, the corresponding code block can be highlighted.

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
