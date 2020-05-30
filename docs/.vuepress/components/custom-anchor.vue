<template>
  <div>
    <div
      v-for="anchor in titles"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor)"
    >
      <a style="cursor: pointer">{{anchor.title}}</a>
    </div>
    <v-md-editor
      v-model="text"
      mode="preview"
      :theme="theme"
      ref="editor"
    />
  </div>
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'

const text = `
# 一级标题
内容内容内容内容内容内容
内容内容内容内容内容内容
内容内容内容内容内容内容
内容内容内容内容内容内容

## 二级标题1
内容内容内容内容内容内容
内容内容内容内容内容内容
内容内容内容内容内容
内容内容内容内容内容

### 三级标题
内容内容内容内容内容
内容内容内容内容内容
内容内容内容内容内容

## 二级标题2
内容内容内容内容内容内容
内容内容内容内容内容内容
内容内容内容内容内容
内容内容内容内容内容

### 三级标题
内容内容内容内容内容
内容内容内容内容内容
内容内容内容内容内容内容内容内容内容内容
`

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;

    return {
      text,
      titles: []
    }
  },
  mounted () {
    const anchors = this.$refs.editor.$el.querySelectorAll('.v-md-editor-preview h1,h2,h3,h4,h5,h6');
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
      const { editor } = this.$refs;
      const { lineIndex } = anchor;

      const heading = editor.$el.querySelector(`.v-md-editor-preview [data-v-md-line="${lineIndex}"]`); 

      if (heading) editor.previewScrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 60
      });
    }
  }
}
</script>