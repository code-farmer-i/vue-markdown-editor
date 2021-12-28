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

### tab-size

- type：`Number`
- default： `2`

The length of the tab character when editing and previewing. Both the editor and preview components support this property.

### toc-nav-position-right

- type：`Boolean`
- default： `false`

Whether the directory navigation is on the right.

### default-show-toc

- type：`Boolean`
- default： `false`

Whether to show toc by default.

### placeholder

- type：`String`

### autofocus

- type：`Boolean`
- default： `false`

### default-fullscreen

- type：`Boolean`
- default： `false`

Whether to enable full screen by default.

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

### toolbar-config

- type：`Object`
- default： `{}`

Some configuration of the built-in toolbar.

Optional:

```js
{
  'image-link': {
    // Whether to bring the width and height attribute by default when inserting the image link
    insertWithSize: false
  }
}
```

### disabled-menus

- type：`Object`
- default：`['image/upload-image']`

Disabled menu. default is the upload local image menu under the image toolbar. Example: `h/h1` (disable the h1 title menu under the title toolbar).

### upload-image-config

- type：`Object`
- default：`{ accept: 'image/*' }`

### before-preview-change

- type: `Function`
- default value: `-`
- callback parameters: `(text, next)`

Function triggered before preview parsing. After configuring this property, you must call the next method and pass in the md text that needs to be rendered, otherwise the preview component will not be rendered.

### codemirror-config

- type：`Object`
- default：`{}`

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
  ...this.codemirrorConfig,
});
```

### codemirror-style-reset

- type：`Boolean`
- default：`true`

Whether to optimize some styles of the codemirror editor. If closed, the default style of the codemirror editor will be restored.

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

### blur

-Callback parameters: `(event)`

Fires when the editor loses focus.

### save

- Callback parameter：`(text, html)`

Event triggered when click save toolbar.

### image-click

- Callback parameter：`(images, currentIndex)`

Event triggered when the picture is clicked.

### fullscreen-change

- Callback parameter：`(isFullscreen)`

Event triggered when switching to full screen state.

### upload-image

- Callback parameter：`(event, insertImage)`

After using the upload image in the toolbar, the event will be triggered when the user triggers the image upload action (for example: select the image to upload, drag the image into the editor, and paste the screenshot into the editor).

demo：[Upload Image](./senior/upload-image.md)
