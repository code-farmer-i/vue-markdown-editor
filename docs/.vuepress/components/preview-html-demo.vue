<template>
  <v-md-preview-html
    :html="html"
    height="500px"
  />
</template>

<script>
import VMdPreviewHtml from '../../../lib/preview-html';
import '../../../lib/style/preview-html.css';
import createCopyCodePreview from '../../../lib/plugins/copy-code/preview';
import html from '../../../dev/html';

import '../../../lib/theme/style/vuepress.css';
import '../../../lib/plugins/copy-code/copy-code.css';

VMdPreviewHtml.use(createCopyCodePreview());

export default {
  components: {
    [VMdPreviewHtml.name]: VMdPreviewHtml,
  },
  data() {
    return {
      html,
    };
  },
};
</script>