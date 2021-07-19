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
    <el-image-viewer
      v-if="!isMobile && showImageViewer"
      :initial-index="imagePreviewInitIndex"
      :url-list="images"
      @close="showImageViewer = false"
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
