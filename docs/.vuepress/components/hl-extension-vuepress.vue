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

VMdEditor.use(vuepressTheme, {
  Prism,
  codeHighlightExtensionMap: {
    vue: 'html',
  },
});

const text = `\`\`\`vue
<template></template>

<script>
export default {}
<\/script>
\`\`\``;

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