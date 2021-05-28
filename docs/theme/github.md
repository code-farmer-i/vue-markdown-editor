# Github

## Introduction

example：

<ClientOnly>
  <base-editor />
</ClientOnly>

## Expand MarkdownIt

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
  extend(md) {
    // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
    // md.set(option).use(plugin);
  },
});
```

## Extended code highlighting language pack

Introduce language packs on demand (recommended)

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js/lib/core';
// languages
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});
```

Introduce all language packs (not recommended)

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// all languages
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs,
});
```

[Check out the language packs supported by highlight.js](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

After expansion, the corresponding code block can be highlighted.

<ClientOnly>
  <extend-github-theme />
</ClientOnly>
