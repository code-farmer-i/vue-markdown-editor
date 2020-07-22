<template>
  <v-md-editor
    :theme="theme"
    height="500px"
    v-model="text"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import vuepressTheme from '../../../lib/theme/vuepress.js';

const text = `\`\`\` bash {1,3}
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`
`;

export default {
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    this.theme = vuepressTheme;

    return {
      text,
    };
  },
};
</script>