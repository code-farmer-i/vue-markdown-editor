<template>
  <v-md-editor
    height="500px"
    v-model="text"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import vuepressTheme from '../../../lib/theme/vuepress.js';
import '../../../lib/theme/style/vuepress.css';

import Prism from 'prismjs';
import 'prismjs/components/prism-json';

import createHighlightLinesPlugin from '../../../lib/plugins/highlight-lines/index';
import '../../../lib/plugins/highlight-lines/highlight-lines.css';

const text = `\`\`\` js {1,3}
import VueMarkdownEditor from '@kangc/v-md-editor';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';

VueMarkdownEditor.use(createHighlightLinesPlugin());
\`\`\``;

export default {
  created() {
    VMdEditor.use(createHighlightLinesPlugin());
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