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
    handleImageUpload(e) {
      console.log(e);
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
