# Preview Html Component

<ClientOnly>
  <preview-html-demo />
</ClientOnly>

### Import

```js
import Vue from 'vue';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// theme style
import '@kangc/v-md-editor/lib/theme/style/vuepress';

Vue.use(VMdPreviewHtml);
```

## Import in vue3

```js
import { createApp } from 'vue';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

// theme style
import '@kangc/v-md-editor/lib/theme/style/vuepress';

const app = createApp(/*...*/);

app.use(VMdPreviewHtml);
```

## Usage

```vue
<template>
  <!-- preview-class is the theme's style class name, for example, vuepress is vuepress-markdown-body -->
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
