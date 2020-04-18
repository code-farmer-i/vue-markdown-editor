<template>
  <div>
    <v-md-editor
      v-model="value"
      right-toolbar="todo-list emoji tip"
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
      value: `$x_i + y_i = z_i$和$\sum_{i=1}^n a_i=0$

$$\\sum_{i=1}^n a_i=0$$`,
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
