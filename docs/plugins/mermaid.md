# Mermaid plugin (flowchart)

You can introduce the `mermaid` plugin to support flowcharts or other graphics：

<ClientOnly>
  <plugin-mermaid />
</ClientOnly>

### cdn introduces mermaid resources

```html
<script src="https://unpkg.com/mermaid/"></script>
```

### Import：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';

VueMarkdownEditor.use(createMermaidPlugin());
```

### Usage：

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

::: tip
For more syntax, please refer to [mermaid official document](https://mermaid-js.github.io/mermaid/#/flowchart)
:::
