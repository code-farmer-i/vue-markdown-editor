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
import vuepressTheme from '../../../lib/theme/vuepress.js'
import 'prismjs/components/prism-bash';

const text = `::: tip 
  你可以点击 toolbar 中的 tip 来快速插入
:::

::: warning
  这是一段警告
:::

::: danger
这是一个危险警告
:::

::: tip 自定义标题
  你也可以自定义块中的标题
:::

::: danger STOP
  危险区域，禁止通行
:::
`

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