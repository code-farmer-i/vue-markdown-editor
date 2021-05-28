<template>
  <v-md-preview
    :text="text"
    height="500px"
  />
</template>

<script>
import VMdPreview from '../../../lib/preview';
import '../../../lib/style/preview.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import text from '../../../dev/text';

import hljs from 'highlight.js/lib';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

export default {
  components: {
    [VMdPreview.name]: VMdPreview,
  },
  data() {
    return {
      text,
    };
  },
};
</script>