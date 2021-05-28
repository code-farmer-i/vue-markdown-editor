<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | tip"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createTipPlugin from '../../../lib/plugins/tip/index';
import '../../../lib/plugins/tip/tip.css';

import hljs from 'highlight.js/lib';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

VMdEditor.use(createTipPlugin());

const text = `::: tip
  dsa
:::
`;

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