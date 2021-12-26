<h1 align="center">Markdown Editor built on Vue</h1>
<h3 align="center">This is a fork of the <a href="https://github.com/code-farmer-i/vue-markdown-editor">original project</a></h3>

<p align="center">
  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>
</p>

## What this fork adds

This fork adds the possibility to use any custom component as a toolbar button. For example, we can obtain a customized toolbar like the one below:

![image](https://user-images.githubusercontent.com/4061104/144724202-d9b679f1-78b4-4b25-82f0-ff70efa7da4a.png)

by using a `toolbar` config like this:

```js
const customToolbar = {
  myButton: {
    title: 'Options',
    slot: true, // this tells the editor to render the button using our custom template
    preventNativeClick: false, // this allows elements like a select to work correctly
  },
  my2ndButton: {
    title: 'Settings',
    slot: true,
    action() {
      // you can still define the onClick action via the usual function
      console.log('opening the settings..');
    },
  },
};
```

Then we can provide custom templates for `myButton` and `my2ndButton`, like this:

```js
<v-md-editor
  v-model="text"
  height="500px"
  :toolbar="customToolbar"
  left-toolbar="undo redo | myButton my2ndButton"
>
  <template #myButton>
    <select name="opts">
      <option value="opt1">
        option 1
      </option>
      <option value="opt2">
        option 2
      </option>
    </select>
  </template>
  <template #my2ndButton>
    <img
      src="https://www.svgrepo.com/show/131974/settings.svg"
      intrinsicsize="512 x 512"
      width="16"
      height="16"
      srcset="https://www.svgrepo.com/show/131974/settings.svg 4x"
      alt="Settings SVG Vector"
    >
  </template>
</v-md-editor>
```

## Links

- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)
- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)
- [中文文档](http://ckang1229.gitee.io/vue-markdown-editor/zh/)
- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)

## Communication

qq group: 798884474

## Install

```bash
# Vue 2 use npm
npm i @kangc/v-md-editor -S
# Vue 2 use yarn
yarn add @kangc/v-md-editor

# Vue 3 use npm
npm i @kangc/v-md-editor@next -S
# Vue 3 use yarn
yarn add @kangc/v-md-editor@next
```

## Quick Start

```js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);
```

## Quick Start In Vue3

```js
import { createApp } from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(/*...*/);

app.use(VMdEditor);
```

## Usage

```html
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
</script>
```

## Usage Composition Api

```html
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const text = ref('');

      return {
        text,
      };
    },
  };
</script>
```

## Sponsor

Paypal

[PayPal.Me](https://paypal.me/codefarmeri?locale.x=zh_XC)

Alipay 支付宝

<img src="https://user-images.githubusercontent.com/15082905/119299019-c583e500-bc90-11eb-8b34-4bff83da3745.png" width="140"/>

WeChat Pay 微信

<img src="https://user-images.githubusercontent.com/15082905/119299205-13005200-bc91-11eb-919d-543b1550bab6.png" width="140"/>

## Reference

- [ElementUi Utils clickoutside](https://github.com/ElemeFE/element/blob/dev/src/utils/clickoutside.js)
- [ElementUi Utils resize-event](https://github.com/ElemeFE/element/blob/dev/src/utils/resize-event.js)
- [ElementUi Utils scrollbar-width](https://github.com/ElemeFE/element/blob/dev/src/utils/scrollbar-width.js)
- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)
- [vuepress-plugin-container](https://github.com/vuepress/vuepress-community/blob/master/packages/vuepress-plugin-container/src/markdown-it-container.ts)
- [vuepress markdown preWrapper](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/preWrapper.js)
- [vuepress markdown link](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/link.js)
- [markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex/blob/master/index.js)
- [markdown-it-table-of-contents](https://github.com/Oktavilla/markdown-it-table-of-contents/blob/master/index.js)
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists/blob/master/index.js)

## License

[MIT](https://github.com/code-farmer-i/vue-markdown-editor/blob/dev/LICENSE)
