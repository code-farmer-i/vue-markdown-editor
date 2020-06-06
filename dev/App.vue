<template>
  <div>
    <v-md-editor
      v-model="text"
      height="500px"
      autofocus
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      @fullscreen-change="handleFullscreenChange"
      @save="handleSave"
      ref="editor"
    />
  </div>
</template>

<script>
import text from './text';

export default {
  data () {
    return {
      text: '![七龙珠](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg){width="100%" height="auto"}',
    };
  },
  methods: {
    handleFullscreenChange (v) {
      console.log(v);
    },
    handleUploadImage(e, insertImage, files) {
      console.log(files);

      insertImage({
        url: '111',
        desc: '111',
      });
    },
    handleSave (v, html) {
      console.log(v, html);
    },
  },
};
</script>
