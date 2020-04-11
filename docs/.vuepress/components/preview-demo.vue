<template>
  <v-md-preview
    :text="text"
    height="500px"
  />
</template>

<script>
import VMdPreview from '../../../lib/preview'
import '../../../lib/style/preview.css'
import githubTheme from '../../../lib/theme/github.js'
import text from '../../../dev/text'

VMdPreview.useTheme(githubTheme);

export default {
  components: {
    [VMdPreview.name]: VMdPreview
  },
  data () {
    return {
      text
    }
  }
}
</script>