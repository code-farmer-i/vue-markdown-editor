<template>
  <div
    class="v-md-editor-preview"
    :style="{
      tabSize,
      '-moz-tab-size': tabSize,
      '-o-tab-size': tabSize
    }"
    @click="handlePreviewClick"
  >
    <div
      :class="[previewClass]"
      v-html="html"
    />
  </div>
</template>

<script>
import PreviewMixin from '@/mixins/preview';

export default {
  name: 'v-md-preview-html',
  mixins: [PreviewMixin],
  props: {
    html: {
      type: String,
      default: '',
    },
    previewClass: String,
  },
};
</script>
