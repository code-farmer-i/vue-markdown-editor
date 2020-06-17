# Github

## Introduction

example：

<ClientOnly>
  <base-editor />
</ClientOnly>

## Expand

The theme package only supports js(javascript), xml(html), css by default. In order to avoid introducing too much redundant code, the package size is too large. If you need to support more language code highlighting, please introduce the corresponding language pack as needed.

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
// Introduce highlightjs language packs as needed, here is json as an example
import json from 'highlight.js/lib/languages/json';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

VueMarkdownEditor.use(githubTheme, {
  extend(md, hljs) {
    // md is a markdown-it instance, you can modify the configuration here, and use plugin for syntax expansion
    // md.set(option).use(plugin);
    // Register Language Pack
    hljs.registerLanguage('json', json);
  },
});
```

[Check out the language packs supported by highlight.js](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

After expansion, the corresponding code block can be highlighted.

<ClientOnly>
  <extend-github-theme />
</ClientOnly>
