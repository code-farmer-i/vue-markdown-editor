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

模式。可选值：`edit`(纯编辑模式) `editable`(编辑与预览模式) `preview`(纯预览模式)。

### height

- 类型：`String`
- 默认值： `''`

正常模式下编辑器的高度。

### tab-size

- 类型：`Number`
- 默认值： `2`

编辑和预览时制表符的长度，编辑器和预览组件都支持该属性。

### toc-nav-position-right

- 类型：`Boolean`
- 默认值： `false`

目录导航是否在右侧。

### default-show-toc

- 类型：`Boolean`
- 默认值： `false`

是否默认显示目录导航。

### placeholder

- 类型：`String`

### autofocus

- 类型：`Boolean`
- 默认值： `false`

编辑器加载完是否自动聚焦。

### default-fullscreen

- type：`Boolean`
- default： `false`

是否默认开启全屏。

### include-level

- 类型: `Array`
- 默认值: `[2, 3]`

目录导航生成时包含的标题。默认包含 2 级、3 级标题。

### left-toolbar

- 类型：`String`
- 默认值： `undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save`

| 名称          | 说明                                      |
| ------------- | ----------------------------------------- |
| undo          | 撤销                                      |
| redo          | 重做                                      |
| clear         | 清空                                      |
| h             | 标题                                      |
| bold          | 粗体                                      |
| italic        | 斜体                                      |
| strikethrough | 中划线                                    |
| quote         | 引用                                      |
| ul            | 无序列表                                  |
| ol            | 有序列表                                  |
| table         | 表格                                      |
| hr            | 分割线                                    |
| link          | 链接                                      |
| image         | [插入图片](./senior/upload-image.md)      |
| code          | 代码块                                    |
| save          | 保存，点击后触发[save](./api.md#save)事件 |

左侧工具栏

### right-toolbar

- 类型：`String`
- 默认值： `preview toc sync-scroll fullscreen`

右侧工具栏

| 名称        | 说明     |
| ----------- | -------- |
| preview     | 预览     |
| toc         | 目录导航 |
| sync-scroll | 同步滚动 |
| fullscreen  | 全屏     |

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

参考高级用法：[自定义工具栏](./senior/toolbar.md)

### toolbar-config

- 类型：`Object`
- 默认值： `{}`

内置 toolbar 的一些配置。

可选配置：

```js
{
  'image-link': {
    // 是否在插入图片链接的时候默认带上width height 属性，默认值：false
    insertWithSize: false
  }
}
```

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

上传本地图片的相关配置。参考高级用法：[如何插入本地图片](./senior/upload-image.md)

### before-preview-change

- 类型：`Function`
- 默认值：`-`
- 回调参数：`(text, next)`

在预览解析前触发的函数，配置此属性后必须要调用 next 方法并传入需要渲染的 md 文本，否则 preview 组件将不会进行渲染。

### codemirror-config

- 类型：`Object`
- 默认值：`{}`

初始化 Codemirror 的配置。将会与内部的默认的配置合并。如下：

```js
new Codemirror(this.$refs.codemirrorEditor, {
  tabSize: 2,
  lineNumbers: true,
  styleActiveLine: true,
  value: this.text,
  mode: 'markdown',
  lineWrapping: 'wrap',
  scrollbarStyle: 'overlay',
  dragDrop: false,
  // 传入的配置将会在此合并
  ...this.codemirrorConfig,
});
```

[查看可用属性文档](https://codemirror.net/doc/manual.html#config)

::: warning 注意
只有进阶版支持该属性。
:::

### codemirror-style-reset

- 类型：`Boolean`
- 默认值：`true`

是否对 codemirror 编辑器的部分样式进行优化。若关闭，则会恢复 codemirror 编辑器默认的样式。

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

参考高级用法：[自定义工具栏](./senior/toolbar.md)

## Events

### change

- 回调参数：`(text, html)`

内容变化时触发的事件。text 为输入的内容，html 为解析之后的 html 字符串。

### blur

- 回调参数：`(event)`

编辑器失去焦点时触发。

### save

- 回调参数：`(text, html)`

点击 save toolbar 时触发的事件。

### image-click

- 回调参数：`(images, currentIndex)`

点击图片时触发的事件。

### fullscreen-change

- 回调参数：`(isFullscreen)`

切换全屏状态时触发的事件。

### upload-image

- 回调参数：`(event, insertImage)`

toolbar 中使用上传图片之后，用户触发图片上传动作时会触发该事件（例如：选择图片上传，拖拽图片到编辑器中，截图后粘贴到编辑器中）。

参考高级用法：[如何插入本地图片](./senior/upload-image.md)
