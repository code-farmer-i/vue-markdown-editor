<template>
  <v-md-editor
    v-model="value"
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
