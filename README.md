<h1 align="center">Markdown Editor built on Vue</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/@kangchen/vue-markdown-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangchen/vue-markdown-editor.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@kangchen/vue-markdown-editor"><img src="https://img.shields.io/npm/v/@kangchen/vue-markdown-editor.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@kangchen/vue-markdown-editor"><img src="https://img.shields.io/npm/l/@kangchen/vue-markdown-editor.svg?sanitize=true" alt="License"></a>
</p>

## 安装

```bash
# 使用 npm
npm i @kangchen/vue-markdown-editor -S

# 使用yarn
yarn add @kangchen/vue-markdown-editor
```

## 全局注册

```js
import Vue from 'vue';
import VueMarkdownEditor from '@kangchen/vue-markdown-editor';
import '@kangchen/vue-markdown-editor/dist/style/index.css';

// 引入markdown样式 此处以github的markdown样式风格为例
import 'github-markdown-css';
// 引入markdown代码块高亮样式
import 'highlight.js/styles/github';

Vue.use(VueMarkdownEditor);
```

## 按需引入 highlightjs 语言包

内置了 xml(html) css js(javascript)，若需要支持其他语言，请按需引入 highlightjs 语言包

[查看支持的语言包](https://github.com/highlightjs/highlight.js/tree/master/src/languages)

```js
import bash from 'highlight.js/lib/languages/bash';

VueMarkdownEditor.hljs.registerLanguage('bash', bash);
```
