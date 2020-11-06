# 扩展代码高亮的类型

例如扩展类型 vue。

codeHighlightExtensionMap：key 为要扩展的名称，value 为代码高亮支持的语言。

<ClientOnly>
  <hl-extension-github />
</ClientOnly>

```js
VueMarkdownEditor.use(githubTheme, {
  codeHighlightExtensionMap: {
    vue: 'xml',
  },
});
```

<ClientOnly>
  <hl-extension-vuepress />
</ClientOnly>

```js
VueMarkdownEditor.use(vuepressTheme, {
  codeHighlightExtensionMap: {
    vue: 'html',
  },
});
```
