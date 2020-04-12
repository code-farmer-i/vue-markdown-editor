# 自定义工具栏

可以使用自定义工具栏向编辑器内插入你想要快捷输入的文本，如下：

<ClientOnly>
  <extend-toolbar />
</ClientOnly>

示例代码：

```vue
<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | customToolbarName"
    :toolbar="toolbar"
    height="500px"
  />
</template>

<script>
export default {
  data() {
    this.toolbar = {
      customToolbarName: {
        title: 'hover时显示的文字',
        icon: 'toolbar的图标样式类',
        action(editor) {
          editor.insert(function (selected) {
            const prefix = '(((';
            const suffix = ')))';
            const placeholder = '请输入文本';
            const content = selected || placeholder;

            return {
              text: `${prefix}${content}${suffix}`,
              selected: content,
            };
          });
        },
      },
    };

    return {
      text: '',
    };
  },
};
</script>
```
