<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | customToolbarName"
    :toolbar="toolbar"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor'
import '../../../lib/style/base-editor.css'
import githubTheme from '../../../lib/theme/github.js'

export default {
  components: {
    [VMdEditor.name]: VMdEditor
  },
  data () {
    this.theme = githubTheme;
    this.toolbar = {
      customToolbarName: {
        title: 'hover时显示的文字',
        icon: 'v-md-icon-tip',
        action (editor) {
          editor.insert(function(selected){
            const prefix = '(((';
            const suffix = ')))';
            const placeholder = '请输入文本';
            const content = selected || placeholder;

            return {
              text: `${prefix}${content}${suffix}`,
              selected: content
            }
          })
        }
      }
    }

    return {
      text: ''
    }
  }
}
</script>