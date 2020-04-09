## 安装

```bash
# 使用 npm
npm i @kangc/v-md-editor -S

# 使用yarn
yarn add @kangc/v-md-editor
```

## 快速开始

```js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.useTheme(vuepressTheme);

Vue.use(VueMarkdownEditor);
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
