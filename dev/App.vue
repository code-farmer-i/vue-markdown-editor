<template>
  <div>
    <v-md-editor
      v-model="value"
      right-toolbar="todo-list"
      height="500px"
    />
    <v-md-preview :text="value" />
  </div>
</template>

<script>
import text from './text';

export default {
  data () {
    return {
      value: '- [x] sda',
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
