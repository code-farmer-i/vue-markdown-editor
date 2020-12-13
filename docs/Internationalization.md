# internationalization

::: warning
Version 1.4.0 began to support internationalization
:::

## Introduction

v-md-editor uses Chinese as the language by default. If you need to use other languages, you can refer to the following scheme.

## Switch languages

You can switch the currently used language through the use method.

```js
import enUS from '@kangc/v-md-editor/lib/lang/en-US';

VueMarkdownEditor.lang.use('en-US', enUS);
```

## Modify default configs

The copy method can be used to modify and expand the copy.

```js
VueMarkdownEditor.lang.add({
  'zh-CN': {
    h1: {
      toolbar: 'title 1',
    },
  },
});
```

## Config files

| Language | Filename |
| -------- | -------- |
| Chinese  | zh-CN    |
| English  | en-US    |
| German   | de-DE    |
| Korean   | ko-KR    |

View all language configs [Here](https://github.com/code-farmer-i/vue-markdown-editor/tree/dev/src/lang).
