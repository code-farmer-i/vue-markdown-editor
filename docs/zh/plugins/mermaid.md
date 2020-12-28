# Mermaid 插件（流程图等）

可以引入 `mermaid` 插件来支持流程图或者其他图形：

<ClientOnly>
  <plugin-mermaid />
</ClientOnly>

### cdn 引入 mermaid 资源

```html
<script src="https://unpkg.com/mermaid/"></script>
```

### 引入插件：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';

VueMarkdownEditor.use(createMermaidPlugin());
```

### 使用：

```vue
<template>
  <v-md-editor v-model="text" height="500px" />
</template>

<script>
const text = `\`\`\`mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
\`\`\`
`;

export default {
  data() {
    return {
      text,
    };
  },
};
</script>
```

::: tip 提示
更多语法参考[mermaid 官方文档](https://mermaid-js.github.io/mermaid/#/flowchart)
:::
