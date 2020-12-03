## How the saved markdown text is rendered on the page？

If an editor is introduced in your project. You can directly use the editor's preview mode to render.

```vue
<template>
  <v-md-editor :value="markdown" mode="preview"></v-md-editor>
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

VMdPreview.use(githubTheme);
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
// Introduce highlightjs language packs as needed, here is json as an example
import json from 'highlight.js/lib/languages/json';

const hljsTheme = createHljsTheme();
hljsTheme.extend((md, hljs) => {
  // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
  // md.set(option).use(plugin);

  // Register Language Pack
  hljs.registerLanguage('json', json);
});
VueMarkdownEditor.theme(hljsTheme);

Vue.use(VueMarkdownEditor);
```

If your code highlighting chooses to use prismjs:

```js
// main.js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import creatPrismTheme from '@kangc/v-md-editor/lib/theme/prism';
// Introduce prism language packs as needed, here is json as an example
import 'prismjs/components/prism-json';

const prismTheme = creatPrismTheme();
prismTheme.extend((md) => {
  // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
  // md.set(option).use(plugin);
});
VueMarkdownEditor.theme(prismTheme);

Vue.use(VueMarkdownEditor);
```

## How to call a function to convert markdown to html？

```js
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

// Call method to convert markdown to html and use xss filtering
const html = xss.process(VueMarkdownEditor.themeConfig.markdownParser.render('### 标题'));
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
