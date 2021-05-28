<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | emoji"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createEmojiPlugin from '../../../lib/plugins/emoji/index';
import '../../../lib/plugins/emoji/emoji.css';

import hljs from 'highlight.js';

export default {
  created() {
    VMdEditor.use(createEmojiPlugin());
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
    });
  },
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    return {
      text: ':grinning:',
    };
  },
};
</script>