# 上传本地图片

原理：上传图片至文件服务器，上传成功后将返回的图片相关信息插入编辑区域。

<ClientOnly>
  <upload-image />
</ClientOnly>

::: warning 注意
上传图片菜单默认为禁用状态 设置 disabled-menus 为空数组可以开启。
:::

示例代码：

```vue
<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | image"
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
    height="500px"
  />
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      // 此处只做示例
      insertImage({
        url:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: '七龙珠',
        // width: 'auto',
        // height: 'auto',
      });
    },
  },
};
</script>
```
