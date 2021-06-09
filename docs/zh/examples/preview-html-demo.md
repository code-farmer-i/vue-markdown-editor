# html 预览组件

当你的项目中只需要预览 html 文本的时候，可以直接使用此组件。

<ClientOnly>
  <preview-html-demo />
</ClientOnly>

## 引入

```js
import Vue from 'vue';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// 引入使用主题的样式
import '@kangc/v-md-editor/lib/theme/style/vuepress';

Vue.use(VMdPreviewHtml);
```

## 在 vue3 中引入

```js
import { createApp } from 'vue';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// 引入使用主题的样式
import '@kangc/v-md-editor/lib/theme/style/vuepress';

const app = createApp(/*...*/);

app.use(VMdPreviewHtml);
```

## 使用

```vue
<template>
  <!-- preview-class 为主题的样式类名，例如vuepress就是vuepress-markdown-body -->
  <v-md-preview-html :html="html" preview-class="vuepress-markdown-body"></v-md-preview-html>
</template>

<script>
export default {
  data() {
    return {
      html: '',
    };
  },
};
</script>
```
