<template>
  <v-md-editor
    :theme="theme"
    @copy-code-success="handleCopyCodeSuccess"
    height="500px"
    v-model="text"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import createCopyCodePlugin from '../../../lib/plugins/copy-code/index';

VMdEditor.use(createCopyCodePlugin());

export default {
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    this.theme = githubTheme;

    return {
      text: `\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`
`,
    };
  },
  methods: {
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
  },
};
</script>