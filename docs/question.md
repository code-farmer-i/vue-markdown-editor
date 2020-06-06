## 保存后的 markdown 文本如何渲染在页面上？

如果你的项目中引入了编辑器。你可以直接使用编辑器的预览模式来渲染。例如：

```vue
<template>
  <v-md-editor :value="markdown" mode="preview"></v-md-editor>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### 标题',
    };
  },
};
</script>
```

如果你的项目不需要编辑功能，只需要渲染 markdown 你可以只引入 preview 组件来渲染。例如：

```js
// main.js
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';

VMdPreview.use(githubTheme);
Vue.use(VMdPreview);
```

```vue
<template>
  <v-md-preview :text="markdown"></v-md-preview>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### 标题',
    };
  },
};
</script>
```

## 如何自定义导航来定位到对应标题所在的位置？

具体实现思路参考自定义锚点示例：[自定义锚点](/vue-markdown-editor/senior/anchor)
