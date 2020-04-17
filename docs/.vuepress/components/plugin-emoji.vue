<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | emoji"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'
import createEmojiPlugin from '../../../lib/plugins/emoji/index'

VMdEditor.use(createEmojiPlugin())

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;

    return {
      text: ':grinning:'
    }
  }
}
</script>