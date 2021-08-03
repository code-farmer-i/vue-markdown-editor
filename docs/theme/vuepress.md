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

## Expand MarkdownIt

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  extend(md) {
    // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
    // md.set(option).use(plugin);
  },
});
```

## Extended code highlighting language pack

please use the [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) plug-in to introduce the corresponding language packs on demand.

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
module.exports = {
  plugins: [
    [
      'prismjs',
      {
        languages: ['json'],
      },
    ],
  ],
};
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

## Extended code highlighting language pack in vite

please use the [vite-plugin-prismjs](https://github.com/code-farmer-i/vite-plugin-prismjs) plug-in to introduce the corresponding language packs on demand.

Install the `vite-plugin-prismjs` plugin

```bash
# yarn
yarn add vite-plugin-prismjs --dev

# npm
npm install vite-plugin-prismjs
```

Introduce language packs on demand (recommended)

```js
// vite.config.js
import { defineConfig } from 'vite';
import prismjs from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    prismjs({
      languages: ['json'],
    }),
  ],
});
```

Introduce all language packs (not recommended)

```js
// vite.config.js
import { defineConfig } from 'vite';
import prismjs from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    prismjs({
      languages: 'all',
    }),
  ],
});
```

[View languages supported by prism](https://github.com/PrismJS/prism/tree/master/components)

After expansion, the corresponding code block can be highlighted.

<ClientOnly>
  <extend-vuepress-theme />
</ClientOnly>
