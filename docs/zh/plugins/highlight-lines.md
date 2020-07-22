# Highlight Lines 高亮代码行

github:

<ClientOnly>
  <plugin-highlight-lines-github />
</ClientOnly>

vuepress:

<ClientOnly>
   <plugin-highlight-lines-vuepress />
</ClientOnly>

### Import：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';

VueMarkdownEditor.use(createHighlightLinesPlugin());
```
