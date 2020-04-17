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
    left-toolbar="undo redo | customToolbar1 customToolbar2 customToolbar3"
    :toolbar="toolbar"
    height="500px"
  />
</template>

<script>
export default {
  data() {
    this.toolbar = {
      customToolbar1: {
        title: '基础工具栏',
        icon: 'v-md-icon-tip',
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
      customToolbar2: {
        title: '工具栏菜单',
        icon: 'v-md-icon-tip',
        menus: [
          {
            name: 'menu1',
            text: '菜单1',
            action() {
              console.log('你点击了菜单1');
            },
          },
          {
            name: 'menu2',
            text: '菜单2',
            action() {
              console.log('你点击了菜单2');
            },
          },
        ],
      },
      customToolbar3: {
        title: '工具栏面板',
        icon: 'v-md-icon-tip',
        menus: {
          mode: 'panel',
          itemWidth: '56px',
          rowNum: 5,
          items: [
            {
              text: 'item1',
            },
            {
              text: 'item2',
            },
            {
              text: 'item3',
            },
            {
              text: 'item4',
            },
            {
              text: 'item5',
            },
            {
              text: 'item6',
            },
            {
              text: 'item7',
            },
            {
              text: 'item8',
            },
          ],
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
