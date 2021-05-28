<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/codemirror-editor';
import '../../../lib/style/codemirror-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import text from '../../../dev/text';

import hljs from 'highlight.js/lib';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

export default {
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    return {
      text,
    };
  },
};
</script>