<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | tip"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'
import createTipPlugin from '../../../lib/plugins/tip/index'

VMdEditor.use(createTipPlugin())

const text = `::: tip
  dsa
:::
`

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