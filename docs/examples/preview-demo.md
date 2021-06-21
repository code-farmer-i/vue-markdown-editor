# Preview Component

<ClientOnly>
  <preview-demo />
</ClientOnly>

## Import

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

## Import in vue3

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

## Usage

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
