## 安装

```bash
# 使用 npm
npm i @kangc/v-md-editor -S

# 使用yarn
yarn add @kangc/v-md-editor
```

## 安装支持 vue3 的版本

```bash
# 使用 npm
npm i @kangc/v-md-editor@next -S

# 使用 yarn
yarn add @kangc/v-md-editor@next
```

## 快速开始

```js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);
```

## 在 vue3 中注册

```js
import { createApp } from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(/*...*/);

app.use(VueMarkdownEditor);
```

## 使用

```vue
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
