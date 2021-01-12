# Emoji

<ClientOnly>
  <plugin-emoji />
</ClientOnly>

### Import：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

VueMarkdownEditor.use(createEmojiPlugin());
```

### Usage：

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
