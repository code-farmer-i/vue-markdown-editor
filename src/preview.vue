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
    <v-md-image-preview
      v-if="previewSrc"
      :src="previewSrc"
      :on-close="handleClosePreview"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import xss from '@/utils/xss/index';
import { VMdParser } from '@/utils/v-md-parser';

// mixins
import PreviewMixin from '@/mixins/preview';

const component = {
  name: 'v-md-preview',
  mixins: [PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
  },
  emits: ['change'],
  data() {
    return {
      html: '',
    };
  },
  watch: {
    text() {
      this.handleTextChange();
    },
    langConfig() {
      this.handleTextChange();
    },
  },
  computed: {
    vMdParser() {
      return this.$options.vMdParser;
    },
    previewClass() {
      return this.vMdParser.themeConfig.previewClass;
    },
    langConfig() {
      return this.vMdParser.lang.langConfig;
    },
  },
  created() {
    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      this.html = xss.process(this.$options.vMdParser.parse(this.text));

      this.$emit('change', this.text, this.html);
    },
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>
