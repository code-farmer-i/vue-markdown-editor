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
import githubTheme from '../../../lib/theme/github.js';
import createHighlightLinesPlugin from '../../../lib/plugins/highlight-lines/index';

VMdEditor.use(createHighlightLinesPlugin());

const text = `\`\`\` bash {1,3}
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\``;

export default {
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    this.theme = githubTheme;

    return {
      text,
    };
  },
};
</script>