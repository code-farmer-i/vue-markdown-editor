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

import hljs from 'highlight.js';

const text = `\`\`\`vue
<template></template>

<script>
export default {}
<\/script>
\`\`\``;

export default {
  created() {
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
      codeHighlightExtensionMap: {
        vue: 'html',
      },
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