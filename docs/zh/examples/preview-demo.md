# 预览组件

当你的项目中只需要解析预览 markdown 的时候，可以直接使用此组件。

<ClientOnly>
  <preview-demo />
</ClientOnly>

## 引入

```js
import Vue from 'vue';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdPreview);
```

## 在 vue3 中引入

```js
import { createApp } from 'vue';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(/*...*/);

app.use(VMdPreview);
```

## 使用

```vue
<template>
  <v-md-preview :text="text"></v-md-preview>
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
