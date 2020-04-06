<template>
  <vue-markdown-editor @change="handleChange" height="500px" />
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
    handleChange (text, html) {
      console.log(text, html);
    },
  },
};
</script>
