<template>
  <v-md-editor
    v-model="text"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'
import text from '../../../dev/text'

VMdEditor.useTheme(githubTheme);

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    return {
      text
    }
  }
}
</script>