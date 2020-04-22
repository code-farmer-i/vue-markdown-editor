<template>
  <div>
    <v-md-editor
      v-model="value"
      height="500px"
    />
    <v-md-preview
      :text="value"
      ref="preview"
      @click.native="handlePreviewClick"
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
  methods: {
    handleImageUpload(e, insertImage) {
      console.log(e);

      insertImage({
        desc: '111',
      });
    },
    handlePreviewClick(e) {
      const headingId = e.target.getAttribute('data-v-md-anchor');

      this.$refs.preview.scrollToTarget(this.$refs.preview.$el.querySelector(`[data-v-md-heading=${headingId}]`), window);
    },
  },
};
</script>
