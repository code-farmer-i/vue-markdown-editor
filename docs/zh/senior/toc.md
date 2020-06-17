# 目录导航

开启目录导航来提升编辑效率。

<ClientOnly>
  <toc-nav />
</ClientOnly>

## 相关配置

配置生成目录导航时包含的标题，默认值为[2, 3]。

```vue
<template>
  <v-md-editor :include-level="[3, 4]"></v-md-editor>
</template>
```

配置 toc 生成导航时包含的标题，默认值为[2, 3]。

```js
VMdEditor.use(githubTheme, {
  config: {
    toc: {
      includeLevel: [3, 4],
    },
  },
});
```
