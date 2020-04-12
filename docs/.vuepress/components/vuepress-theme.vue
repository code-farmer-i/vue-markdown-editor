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
import vuepressTheme from '../../../lib/theme/vuepress.js'
import text from '../../../dev/text'
import 'prismjs/components/prism-bash';

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = vuepressTheme;

    return {
      text
    }
  }
}
</script>