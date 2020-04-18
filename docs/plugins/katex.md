# Katex 插件

可以引入 `katex` 插件来支持插入 katex 公式：

<ClientOnly>
  <plugin-katex />
</ClientOnly>

### cdn 引入 katex 资源

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js"></script>
```

### 引入插件：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';

VueMarkdownEditor.use(createKatexPlugin());
```

### 使用：

```vue
<template>
  <v-md-editor v-model="text" height="500px" />
</template>

<script>
export default {
  data() {
    return {
      text: '$$sum_{i=1}^n a_i=0$$',
    };
  },
};
</script>
```
