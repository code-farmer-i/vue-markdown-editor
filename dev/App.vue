<template>
  <div>
    <v-md-editor
      v-model="text"
      height="500px"
      autofocus
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
    handleImageUpload(e, insertImage) {
      console.log(e);

      insertImage({
        desc: '111',
      });
    },
  },
};
</script>
