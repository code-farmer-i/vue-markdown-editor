<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import vuepressTheme from '../../../lib/theme/vuepress.js';
import '../../../lib/theme/style/vuepress.css';

import Prism from 'prismjs';
import 'prismjs/components/prism-json';

const text = `\`\`\`json
{
  "key": "value"
}
\`\`\``;

export default {
  created() {
    VMdEditor.use(vuepressTheme, {
      Prism,
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