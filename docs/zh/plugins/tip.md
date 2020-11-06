# Tip 提示插件

::: warning 注意
vuepress 主题已内置此插件
:::

可以引入 `tip` 插件来支持插入提示信息：

<ClientOnly>
  <plugin-tip />
</ClientOnly>

### 引入：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';

VueMarkdownEditor.use(createTipPlugin());
```

### 使用：

```vue
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | tip" height="500px" />
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
