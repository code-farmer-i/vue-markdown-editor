## Use error report in vue3?

Please make sure that the version of the editor is installed correctly. Reference document: [Install the version that supports vue3](./quick-start.md)

## How the saved markdown text is rendered on the page？

1. Render markdown text

If an editor is introduced in your project. You can directly use the editor's preview mode to render.

```vue
<template>
  <!-- vue2 -->
  <v-md-editor :value="markdown" mode="preview"></v-md-editor>
  <!-- vue3 -->
  <v-md-editor :model-value="markdown" mode="preview"></v-md-editor>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### title',
    };
  },
};
</script>
```

If your project does not require editing functions and only needs to render markdown, you can only introduce the preview component to render.

```js
// main.js
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// Introduce the theme you use. Take the github theme as an example here
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdPreview);
```

```vue
<template>
  <v-md-preview :text="markdown"></v-md-preview>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### title',
    };
  },
};
</script>
```

2. Render html text

If your project does not require editing functions and only needs to render html, you can only introduce the preview html component to render.

```js
// main.js
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// theme style
import '@kangc/v-md-editor/lib/theme/style/vuepress';

Vue.use(VMdPreviewHtml);
```

```vue
<template>
  <!-- preview-class is the theme's style class name, for example, vuepress is vuepress-markdown-body -->
  <v-md-preview-html :html="html" preview-class="vuepress-markdown-body"></v-md-preview-html>
</template>

<script>
export default {
  data() {
    return {
      html: '<div data-v-md-line="1"><h1 align="center">Markdown Editor built on Vue</h1>',
    };
  },
};
</script>
```

## How to customize navigation to locate the corresponding title？

For specific implementation ideas, refer to the example of custom anchor point: [Custom Anchor](/vue-markdown-editor/senior/anchor)

## How to customize the rendering style？

If you don't need to use github or vuepress theme. Use the following method, you can not include any html style while retaining the basic functions of the editor.

If your code highlighting chooses to use highlight.js:

```js
// main.js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import createHljsTheme from '@kangc/v-md-editor/lib/theme/hljs';

// highlightjs
import hljs from 'highlight.js';

const hljsTheme = createHljsTheme({
  Hljs: hljs,
});
hljsTheme.extend((md) => {
  // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
  // md.set(option).use(plugin);
});

// Vue2 Useage
VueMarkdownEditor.theme(hljsTheme);
// Vue3 Useage
// VueMarkdownEditor.vMdParser.theme(hljsTheme);

Vue.use(VueMarkdownEditor);
```

If your code highlighting chooses to use prismjs:

```js
// main.js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import createPrismTheme from '@kangc/v-md-editor/lib/theme/prism';

import Prism from 'prismjs';
import 'prismjs/components/prism-json';

const prismTheme = createPrismTheme({
  Prism,
});
prismTheme.extend((md) => {
  // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
  // md.set(option).use(plugin);
});

// Vue2 Useage
VueMarkdownEditor.theme(prismTheme);
// Vue3 Useage
// VueMarkdownEditor.vMdParser.theme(prismTheme);

Vue.use(VueMarkdownEditor);
```

## How to call a function to convert markdown to html？

```js
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

// Call method to convert markdown to html and use xss filtering
// Vue2
const html = xss.process(VueMarkdownEditor.themeConfig.markdownParser.render('### 标题'));
// Vue3
const html = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render('### 标题'));
```

::: warning
themeConfig.markdownParser.render method can only be called after using the theme
:::

## Can't run normally when using error report in vite?

Error example:

<img :src="$withBase('/images/vite-error.png')">

Solution: add code in `vite.config.js`

```js
export default {
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
  },
};
```

## Vuepress theme quotes php language pack error?

Error：Cannot read property 'tokenizePlaceholders' of undefined

Solution:

```js
// Before introducing the php language pack, you need to introduce its dependency package prism-markup-templating
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
```

Specific reference prism official [issue](https://github.com/PrismJS/prism/issues/1395)

## Use vue3 + typescript to report errors?

Error example: Could not find a declaration file for module'@kangc/v-md-editor/lib/theme/vuepress.js'.

Solution:

```ts
// src/shims.d.ts
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
```
