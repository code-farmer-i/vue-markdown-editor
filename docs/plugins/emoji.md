# Emoji 表情插件

可以引入 `emoji` 插件来支持插入 emoji 表情：

<ClientOnly>
  <plugin-emoji />
</ClientOnly>

### 引入：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';

VueMarkdownEditor.use(createEmojiPlugin());
```

### 使用：

```vue
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | emoji" height="500px" />
</template>

<script>
export default {
  data() {
    return {
      text: ':grinning:',
    };
  },
};
</script>
```
