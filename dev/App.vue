<template>
  <v-md-editor
    v-model="value"
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
