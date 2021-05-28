<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createKatexPlugin from '../../../lib/plugins/katex/npm';
import 'katex/dist/katex.css';

import hljs from 'highlight.js';

export default {
  created() {
    VMdEditor.use(createKatexPlugin());
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
    });
  },
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    return {
      text: '$$\\sum_{i=1}^n a_i=0$$',
    };
  },
};
</script>