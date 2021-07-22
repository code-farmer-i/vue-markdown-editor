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
      :class="[themeConfig.previewClass]"
      v-html="html"
    />
  </div>
</template>

<script>
import xss from '@/utils/xss/index';

// mixins
import PreviewMixin from '@/mixins/preview';
import langMixins from '@/mixins/lang';

const defaultMarkdownLoader = (text) => text;

const component = {
  name: 'v-md-preview',
  mixins: [langMixins, PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
  },
  data() {
    return {
      html: '',
    };
  },
  computed: {
    themeConfig() {
      return component.themeConfig || {};
    },
    markdownParser() {
      return this.themeConfig.markdownParser;
    },
    markdownLoader() {
      return this.markdownParser?.render.bind(this.markdownParser) || defaultMarkdownLoader;
    },
  },
  watch: {
    text() {
      this.handleTextChange();
    },
    langConfig() {
      this.handleTextChange();
    },
  },
  created() {
    if (this.theme) component.use(this.theme);

    if (
      typeof this.markdownLoader !== 'function' ||
      this.markdownLoader === defaultMarkdownLoader
    ) {
      console.warn('Please configure your markdown parser');
    } else {
      const { markdownExtenders } = component;

      markdownExtenders.forEach((extender) => {
        extender(this.markdownParser, () => this.langConfig);
      });
    }

    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      this.html = xss.process(this.markdownLoader(this.text));

      this.$emit('change', this.text, this.html);
    },
  },
};

component.theme = function (themeConfig) {
  component.themeConfig = themeConfig;
};

component.markdownExtenders = [];
component.extendMarkdown = function (extend) {
  component.markdownExtenders.push(extend);
};

export default component;
</script>
