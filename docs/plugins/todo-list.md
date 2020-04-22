# TodoList 任务列表

可以引入 `todo-list` 插件来支持插入 任务列表：

<ClientOnly>
  <plugin-todo-list />
</ClientOnly>

### 引入：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';

VueMarkdownEditor.use(createTodoListPlugin());
```

### 使用：

```vue
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | todo-list" height="500px" />
</template>

<script>
export default {
  data() {
    return {
      text: '- [x] 任务列表',
    };
  },
};
</script>
```

### Options

createTodoListPlugin 时可以传入的参数。例如 createTodoListPlugin({ color: '' })

### color

- 类型: `String`。
- 默认值: `#3eaf7c`。

checkbox 的颜色。
