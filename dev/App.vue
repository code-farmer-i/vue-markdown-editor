<template>
  <v-md-editor
    v-model="value"
    left-toolbar="undo redo clear | bold italic strikethrough quote | h1 h2 h3 h4 h5 h6 | ul ol table | link image code | save |uploadImage | tip"
    height="500px"
  />
</template>

<script>
import text from './text';

export default {
  data () {
    return {
      value: text,
    };
  },
  methods: {
    handleImageUpload(e, insertImage) {
      console.log(e);

      insertImage({
        desc: '111',
      });
    },
  },
};
</script>
