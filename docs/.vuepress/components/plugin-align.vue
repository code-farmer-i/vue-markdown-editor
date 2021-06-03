<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createAlignPlugin from '../../../lib/plugins/align/index';

import hljs from 'highlight.js';

const text = `::: align-left
  left
:::

::: align-center
  center
:::

::: align-right
  right
:::
`;

export default {
  created() {
    VMdEditor.use(createAlignPlugin());
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
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