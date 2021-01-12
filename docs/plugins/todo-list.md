# TodoList

<ClientOnly>
  <plugin-todo-list />
</ClientOnly>

### Import：

```js
import VueMarkdownEditor from '@kangc/v-md-editor';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';

VueMarkdownEditor.use(createTodoListPlugin());
```

### Usage：

```vue
<template>
  <v-md-editor v-model="text" left-toolbar="undo redo | todo-list" height="500px" />
</template>

<script>
export default {
  data() {
    return {
      text: '- [x] Task',
    };
  },
};
</script>
```

### Options

Parameters that can be passed in when creatingTodoListPlugin. For example: createTodoListPlugin({ color:'' })

### color

- type: `String`。
- default: `#3eaf7c`。

checkbox color。
