<template>
  <div>
    <v-md-editor
      v-model="value"
      height="500px"
      ref="editor"
    />
    <v-md-preview
      :text="value"
      ref="preview"
    />
  </div>
</template>

<script>
import text from './text';

export default {
  data () {
    return {
      value: '[[toc]]' + text,
    };
  },
  mounted () {
    this.$refs.editor.toggleToc();
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
