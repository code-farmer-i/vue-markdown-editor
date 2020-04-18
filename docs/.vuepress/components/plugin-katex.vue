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
import githubTheme from '../../../lib/theme/github.js'
import createKatexPlugin from '../../../lib/plugins/katex/npm'

VMdEditor.use(createKatexPlugin())

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;

    return {
      text: '$$\\sum_{i=1}^n a_i=0$$'
    }
  }
}
</script>