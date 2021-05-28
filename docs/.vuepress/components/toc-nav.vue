<template>
  <v-md-editor
    v-model="text"
    height="500px"
    ref="editor"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import text from '../../../dev/text';

import hljs from 'highlight.js';

export default {
  created() {
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
    });
  },
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    return {
      text: `[[toc]]\n\n${text}`,
    };
  },
  mounted() {
    this.$refs.editor.toggleToc();
  },
};
</script>