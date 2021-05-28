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

import hljs from 'highlight.js/lib';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

VMdEditor.use(createKatexPlugin());

export default {
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