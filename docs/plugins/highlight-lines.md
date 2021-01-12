# Highlight Lines

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
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';

VueMarkdownEditor.use(createHighlightLinesPlugin());
```
