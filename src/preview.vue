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
    beforeChange: Function,
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
      return this.vMdParser.lang.config;
    },
  },
  created() {
    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      const next = (text) => {
        this.html = xss.process(this.$options.vMdParser.parse(text));

        this.$emit('change', text, this.html);
      };

      if (this.beforeChange) {
        this.beforeChange(this.text, next);
      } else {
        next(this.text);
      }
    },
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>
