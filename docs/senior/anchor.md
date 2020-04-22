# 自定义锚点

此示例展示了如何在预览模式下通过外部锚点来定位到文档标题位置。

<ClientOnly>
  <custom-anchor />
</ClientOnly>

示例代码：

```vue
<template>
  <div>
    <ul>
      <li v-for="anchor in anchorList" @click="handleAnchorClick(anchor)">
        <a style="cursor: pointer">{{ anchor }}</a>
      </li>
    </ul>
    <v-md-editor v-model="text" mode="preview" :theme="theme" ref="editor" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text,
      anchorList: ['Links', 'Install', 'Quick Start', 'Usage', 'Refrence'],
    };
  },
  methods: {
    handleAnchorClick(anchor) {
      const { editor } = this.$refs;
      anchor = anchor
        .split(' ')
        .map((str) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase())
        .join('-');

      const heading = editor.$el.querySelector(`[data-v-md-heading=${anchor}]`);

      if (heading) {
        // 为头部导航预留 60px
        editor.previewScrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },
};
</script>
```
