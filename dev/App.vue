<template>
  <div>
    <v-md-editor
      v-model="text"
      height="500px"
      autofocus
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      ref="editor"
    />
  </div>
</template>

<script>
import text from './text';

export default {
  data () {
    return {
      text,
    };
  },
  methods: {
    handleUploadImage(e, insertImage, files) {
      console.log(files);

      insertImage({
        desc: '111',
      });
    },
  },
};
</script>
