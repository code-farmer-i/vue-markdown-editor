---
sidebarDepth: 2
---

## Props

### text

- 类型：`String`

需要解析预览的 markdown 字符串。

::: warning 注意
只有预览组件支持该属性。
:::

### v-model

- 类型：`String`

支持双向绑定。

::: warning 注意
只有编辑组件支持该属性。
:::

### mode

- 类型：`String`
- 默认值: `editable`

模式。可选值：`editable`(编辑模式) `preview`(预览模式)。

### height

- 类型：`String`
- 默认值： `''`

正常模式下编辑器的高度。

### include-level

- 类型: `Array`
- 默认值: `[2, 3]`

目录导航生成时包含的标题。默认包含 2 级、3 级标题。

### left-toolbar

- 类型：`String`
- 默认值： `undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save`

| 名称          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| undo          | 撤销                                                 |
| redo          | 重做                                                 |
| clear         | 清空                                                 |
| h             | 标题                                                 |
| bold          | 粗体                                                 |
| italic        | 斜体                                                 |
| strikethrough | 中划线                                               |
| quote         | 引用                                                 |
| ul            | 无序列表                                             |
| ol            | 有序列表                                             |
| table         | 表格                                                 |
| hr            | 分割线                                               |
| link          | 链接                                                 |
| image         | [插入图片](/vue-markdown-editor/senior/upload-image) |
| code          | 代码块                                               |
| save          | 保存，点击后触发[save](/api.html#save)事件           |

左侧工具栏

### right-toolbar

- 类型：`String`
- 默认值： `toc sync-scroll fullscreen`

右侧工具栏

| 名称        | 说明     |
| ----------- | -------- |
| toc         | 目录导航 |
| sync-scroll | 同步滚动 |
| fullscreen  | 撤销     |

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

参考高级用法：[自定义工具栏](/vue-markdown-editor/senior/toolbar)

### disabled-menus

- 类型：`Object`
- 默认值：`['image/upload-image']`

禁用的菜单。默认值为 image 工具栏下的上传本地图片菜单。示例：`h/h1` （禁用标题工具栏下的 h1 标题菜单）。

### upload-image-config

- 类型：`Object`
- 默认值：`{ accept: 'image/*' }`

| 名称   | 默认值   | 描述                                                                               |
| ------ | -------- | ---------------------------------------------------------------------------------- |
| accept | image/\* | 同 img 标签的 [accept 属性](https://www.w3school.com.cn/tags/att_input_accept.asp) |

上传本地图片的相关配置。参考高级用法：[如何插入本地图片](/vue-markdown-editor/senior/upload-image)

### codemirrorConfig

- 类型：`Object`
- 默认值：`{}`

初始化 Codemirror 的配置。将会与内部的默认的配置合并。如下：

```js
new Codemirror(this.$refs.codemirrorEditor, {
  tabSize: 2,
  lineNumbers: true,
  styleActiveLine: true,
  // 传入的配置将会在此合并
  ...this.codemirrorConfig,
  value: this.text,
  mode: 'markdown',
  lineWrapping: 'wrap',
  scrollbarStyle: 'overlay',
  dragDrop: false,
});
```

[查看可用属性文档](https://codemirror.net/doc/manual.html#config)

::: warning 注意
只有进阶版支持该属性。
:::

## Methods

### focus

使编辑器聚焦。

### insert

- 参数：`(getInsertContent: Function)`

向编辑其中插入文本。例如：

```js
// selected 为当前选中的文本
editor.insert((selected) => {
  const prefix = '**';
  const suffix = '**';
  const content = selected || '粗体';

  return {
    // 要插入的文本
    text: `${prefix}${content}${suffix}`,
    // 插入后要选中的文本
    selected: content,
  };
});
```

参考高级用法：[自定义工具栏](/vue-markdown-editor/senior/toolbar)

## Events

### change

- 回调参数：`(text, html)`

内容变化时触发的事件。text 为输入的内容，html 为解析之后的 html 字符串。

### save

- 回调参数：`(text, html)`

点击 save toolbar 时触发的事件。

### upload-image

- 回调参数：`(event, insertImage)`

toolbar 中使用上传图片之后，用户选择完图片会触发该事件。

参考高级用法：[如何插入本地图片](/vue-markdown-editor/senior/upload-image)
