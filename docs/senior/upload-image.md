# Upload Image

upload the picture to the file server, and insert the relevant information of the returned picture into the editing area after the upload is successful.

<ClientOnly>
  <upload-image />
</ClientOnly>

::: warning
The upload image menu is disabled by default. Set disabled-menus to an empty array to enable it.
:::

example：

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
      // Get the files and upload them to the file server, then insert the corresponding content into the editor
      console.log(files); 
      
      // Here is just an example
      const formData = new FormData()
      formData.append('file', files[0])
      
      axios.post('url', formData).then(res => {
          insertImage({
          url:res.data.url,
          desc: 'desc',
          // width: 'auto',
          // height: 'auto',
        });
      })
    },
  },
};
</script>
```
