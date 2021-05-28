<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import json from 'highlight.js/lib/languages/json';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';

import hljs from 'highlight.js';
hljs.registerLanguage('json', json);

const text = `\`\`\`json
{
  "key": "value"
}
\`\`\``;

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
      text,
    };
  },
};
</script>