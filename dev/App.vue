<template>
  <v-md-editor
    v-model="value"
    left-toolbar="uploadImage"
    @change="handleChange"
    @save="handleSave"
    @upload-image="handleImageUpload"
    height="500px"
  />
</template>

<script>
export default {
  data () {
    return {
      value: 'asdasdasd',
    };
  },
  watch: {
    value() {
      console.log(this.value);
    },
  },
  methods: {
    handleImageUpload(e, insertImage) {
      console.log(e);

      insertImage({
        desc: '111',
      });
    },
    handleSave (text, html) {
      console.log(text, html);
    },
    handleChange (text, html) {
      console.log(text, html);
    },
  },
};
</script>
