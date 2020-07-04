# 进阶版

编辑器由 CodeMirror 实现，拥有较为良好的编辑体验，但是包的体积会变大。

<ClientOnly>
  <codemirror-editor />
</ClientOnly>

## 引入

```js
import Vue from 'vue';
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

VMdEditor.use(githubTheme);

Vue.use(VMdEditor);
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

参考:

- [CodeMirror](https://codemirror.net/)
