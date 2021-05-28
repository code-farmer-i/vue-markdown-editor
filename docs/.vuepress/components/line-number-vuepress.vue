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

const text = `\`\`\` bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`
`;

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