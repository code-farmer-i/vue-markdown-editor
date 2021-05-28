<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | todo-list"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createTodoListPlugin from '../../../lib/plugins/todo-list/index';
import '../../../lib/plugins/todo-list/todo-list.css';

import hljs from 'highlight.js';

export default {
  created() {
    VMdEditor.use(createTodoListPlugin());
    VMdEditor.use(githubTheme, {
      Hljs: hljs,
    });
  },
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    return {
      text: '- [x] Task',
    };
  },
};
</script>