<template>
  <v-md-editor v-model="text" :theme="theme" :themeConfig="themeConfig" height="500px" />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import vuepressTheme from '../../../lib/theme/vuepress.js';
import 'prismjs/components/prism-json';

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
    this.theme = vuepressTheme;
    this.themeConfig = {
      codeHighlightExtensionMap: {
        vue: 'html',
      },
    };

    return {
      text,
    };
  },
};
</script>