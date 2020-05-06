<template>
  <v-md-editor
    v-model="text"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import json from 'highlight.js/lib/languages/json';
import githubTheme from '../../../lib/theme/github.js'

VMdEditor.use(githubTheme, {
  extend (md, hljs) {
    hljs.registerLanguage('json', json);
  }
})

const text = `\`\`\`json
{
  "key": "value"
}
\`\`\``

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;

    return {
      text
    }
  }
}
</script>