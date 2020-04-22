<template>
  <v-md-editor
    v-model="text"
    :theme="theme"
    height="500px"
    ref="editor"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'
import text from '../../../dev/text'

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;

    return {
      text: `[[toc]]\n\n${text}`
    }
  },
  mounted () {
    this.$refs.editor.toggleToc();
  }
}
</script>