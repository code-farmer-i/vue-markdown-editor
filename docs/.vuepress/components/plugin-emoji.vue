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

import hljs from 'highlight.js/lib';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

VMdEditor.use(createEmojiPlugin());

export default {
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