<template>
  <div>
    <div
      v-for="anchor in titles"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor)"
    >
      <a style="cursor: pointer">{{anchor.title}}</a>
    </div>
    <v-md-preview
      :text="text"
      ref="preview"
    />
  </div>
</template>

<script>
import VMdPreview from '../../../lib/preview';
import '../../../lib/style/preview.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';

import hljs from 'highlight.js';

const text = `
# heading 1
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

## heading 2
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

### heading 3
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

## heading 2
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

### heading 3
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
`;

export default {
  created() {
    VMdPreview.use(githubTheme, {
      Hljs: hljs,
    });
  },
  components: {
    [VMdPreview.name]: VMdPreview,
  },
  data() {
    return {
      text,
      titles: [],
    };
  },
  mounted() {
    const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
  },
  methods: {
    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

      if (heading)
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
    },
  },
};
</script>