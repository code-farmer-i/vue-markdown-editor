<template>
  <v-md-editor
    v-model="text"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/codemirror-editor';
import '../../../lib/style/codemirror-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import text from '../../../dev/text';

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