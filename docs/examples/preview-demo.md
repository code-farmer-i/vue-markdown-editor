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
import hljs from 'highlight.js/lib';
// languages
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// language js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// language xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// language css
hljs.registerLanguage('css', cssLanguage);

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdPreview);
```

## Import in vue3

```js
import { creatApp } from 'vue';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

// highlightjs
import hljs from 'highlight.js/lib';
// languages
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// language js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// language xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// language css
hljs.registerLanguage('css', cssLanguage);

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = creatApp(/*...*/);

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
