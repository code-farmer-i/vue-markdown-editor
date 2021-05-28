<template>
  <v-md-editor
    height="500px"
    v-model="text"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';

import hljs from 'highlight.js/lib';

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
      text:
        '![](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg){{{width="100" height="auto"}}}',
    };
  },
};
</script>