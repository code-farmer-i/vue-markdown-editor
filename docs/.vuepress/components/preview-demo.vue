<template>
  <v-md-preview
    :text="text"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdPreview from '../../../lib/preview'
import '../../../lib/style/preview.css'
import githubTheme from '../../../lib/theme/github.js'
import text from '../../../dev/text'

export default {
  components: {
    [VMdPreview.name]: VMdPreview
  },
  data () {
    this.theme = githubTheme;

    return {
      text
    }
  }
}
</script>