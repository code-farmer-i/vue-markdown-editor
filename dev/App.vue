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
    handlePreviewClick() {
      const target = this.$refs.preview.$el.querySelector('[data-v-md-heading=install]');

      this.$refs.preview.scrollToTarget(target, window);
    },
  },
};
</script>
