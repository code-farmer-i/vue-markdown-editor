# LineNumber 代码行号

可以引入 `line-number` 插件来支持显示代码行号：

github:

<ClientOnly>
  <line-number-github />
</ClientOnly>

vuepress:

<ClientOnly>
  <line-number-vuepress />
</ClientOnly>

### 引入：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

VueMarkdownEditor.use(createLineNumbertPlugin());
```
