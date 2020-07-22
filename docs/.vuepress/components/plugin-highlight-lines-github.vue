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

const text = `\`\`\` js {1,3}
import VueMarkdownEditor from '@kangc/v-md-editor';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';

VueMarkdownEditor.use(createHighlightLinesPlugin());
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