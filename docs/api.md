---
sidebarDepth: 2
---

## Props

### text

- type：`String`

Need to parse markdown string。

::: warning
Only preview component support
:::

### v-model

- type：`String`

::: warning
Only editing components support this property.
:::

### mode

- type：`String`
- default: `editable`

Optional value：`edit` `editable` `preview`。

### height

- type：`String`
- default： `''`

### placeholder

- type：`String`

### autofocus

- type：`Boolean`
- default： `false`

### include-level

- type: `Array`
- default: `[2, 3]`

The title included when the directory navigation is generated. By default, it includes level 2 and level 3 titles.

### left-toolbar

- type：`String`
- default： `undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save`

| 名称          | 说明                                               |
| ------------- | -------------------------------------------------- |
| undo          | undo                                               |
| redo          | redo                                               |
| clear         | clear                                              |
| h             | headings                                           |
| bold          | bold                                               |
| italic        | italic                                             |
| strikethrough | strikethrough                                      |
| quote         | quote                                              |
| ul            | ul                                                 |
| ol            | ol                                                 |
| table         | table                                              |
| hr            | hr                                                 |
| link          | link                                               |
| image         | [demo](./senior/upload-image.md)                   |
| code          | code                                               |
| save          | Trigger [save](./api.md#save) event after clicking |

### right-toolbar

- type：`String`
- default： `preview toc sync-scroll fullscreen`

### toolbar

- type：`Object`
- default：`{}`

example:

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
          icon: 'icon class',
          title: 'title',
          action(editor) {},
        },
      },
    };
  },
};
</script>
```

demo：[Custom Toolbar](./senior/toolbar.md)

### disabled-menus

- type：`Object`
- default：`['image/upload-image']`

Disabled menu. default is the upload local image menu under the image toolbar. Example: `h/h1` (disable the h1 title menu under the title toolbar).

### upload-image-config

- type：`Object`
- default：`{ accept: 'image/*' }`

### codemirrorConfig

- type：`Object`
- default：`{}`

```js
new Codemirror(this.$refs.codemirrorEditor, {
  tabSize: 2,
  lineNumbers: true,
  styleActiveLine: true,
  ...this.codemirrorConfig,
  value: this.text,
  mode: 'markdown',
  lineWrapping: 'wrap',
  scrollbarStyle: 'overlay',
  dragDrop: false,
});
```

## Methods

### focus

### insert

- params：`(getInsertContent: Function)`

Insert text into the editor.

```js
editor.insert((selected) => {
  const prefix = '**';
  const suffix = '**';
  const content = selected || '粗体';

  return {
    text: `${prefix}${content}${suffix}`,
    selected: content,
  };
});
```

demo：[Custom toolbar](./senior/toolbar.md)

## Events

### change

- Callback parameter：`(text, html)`

Event triggered when the content changes. text is the input content, and html is the html string after parsing.

### save

- Callback parameter：`(text, html)`

Event triggered when click save toolbar.

### fullscreen-change

- Callback parameter：`(isFullscreen)`

Event triggered when switching to full screen state.

### upload-image

- Callback parameter：`(event, insertImage)`

After using the upload image in the toolbar, the event will be triggered when the user triggers the image upload action (for example: select the image to upload, drag the image into the editor, and paste the screenshot into the editor).

demo：[Upload Image](./senior/upload-image.md)
