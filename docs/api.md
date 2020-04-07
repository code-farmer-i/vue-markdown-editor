---
sidebarDepth: 2
---

## Props

### v-model

- 类型：`String`

支持双向绑定

### height

- 类型：`String`
- 默认值： `''`

正常模式下编辑器的高度

### left-toolbar

- 类型：`String`
- 默认值： `undo redo clear | bold italic strikethrough quote | h1 h2 h3 h4 h5 h6 | ul ol table | link image code | save`

| 名称          | 说明     |
| ------------- | -------- |
| undo          | 撤销     |
| redo          | 重做     |
| clear         | 清空     |
| bold          | 粗体     |
| italic        | 斜体     |
| strikethrough | 中划线   |
| quote         | 引用     |
| h1            | 一级标题 |
| h2            | 二级标题 |
| h3            | 三级标题 |
| h4            | 四级标题 |
| h5            | 五级标题 |
| h6            | 六级标题 |
| ul            | 无序列表 |
| ol            | 有序列表 |
| table         | 表格     |
| link          | 链接     |
| image         | 图片链接 |
| code          | 代码块   |
| save          | 保存     |

左侧工具栏

### right-toolbar

- 类型：`String`
- 默认值： `fullscreen`

右侧工具栏

| 名称       | 说明 |
| ---------- | ---- |
| fullscreen | 撤销 |

### toolbar

- 类型：`Object`
- 默认值：`{}`

自定义工具栏配置，如下

```vue
<template>
  <v-md-editor left-toolbar="undo redo | customToolbar" :toolbar="toolbar" />
</template>

<script>
export default {
  data() {
    return {
      toolbar: {
        customToolbar: {
          name: 'customToolbar',
          icon: 'toolbar图标类名',
          title: 'hover时显示的标题',
          action(editor) {
            // toolbar点击时触发的函数
          },
        },
      },
    };
  },
};
</script>
```

## Methods

### focus

使编辑器聚焦

## Events

### change

- 回调参数：`(text, html)`

内容变化时触发的回调。text 为输入的内容，html 为解析之后的 html 字符串。
