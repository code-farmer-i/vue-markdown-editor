<template>
  <v-md-editor
    v-model="value"
    @change="handleChange"
    @save="handleSave"
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
    handleSave (text, html) {
      console.log(text, html);
    },
    handleChange (text, html) {
      console.log(text, html);
    },
  },
};
</script>
