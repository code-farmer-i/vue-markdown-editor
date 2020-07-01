# Copy Code

Quickly copy code blocks with buttons

<ClientOnly>
  <plugin-copy-code />
</ClientOnly>

### Import：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';

VueMarkdownEditor.use(createCopyCodePlugin());
```

### Usage：

```vue
<template>
  <v-md-editor v-model="text" height="500px" @copy-code-success="handleCopyCodeSuccess" />
</template>

<script>
export default {
  data() {
    return {
      text: `\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`
`,
    };
  },
  methods: {
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
  },
};
</script>
```
