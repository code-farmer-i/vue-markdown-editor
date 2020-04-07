<template>
  <scrollbar>
    <div
      v-html="html"
      class="vue-markdown-editor__preview"
      :class="[previewClass]"
    />
  </scrollbar>
</template>

<script>
import markdownItInstance from '@/utils/markdown-it';
import Scrollbar from '@/components/scrollbar/index';

markdownItInstance.set({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: false,
  typographer: true,

});

export default {
  name: 'v-md-preview',
  components: {
    [Scrollbar.name]: Scrollbar,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    previewClass: {
      type: String,
      default: 'markdown-body',
    },
  },
  data() {
    return {
      html: '',
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newVal, oldVal) {
        this.html = markdownItInstance.render(this.text);

        if (typeof oldVal !== 'undefined') { this.$emit('change', this.text, this.html); }
      },
    },
  },
};
</script>

<style lang="scss">
.vue-markdown-editor {
  &__preview {
    padding: 20px;
  }
}
</style>
