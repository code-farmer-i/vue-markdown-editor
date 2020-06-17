<template>
  <v-md-editor
    v-model="text"
    left-toolbar="undo redo | image"
    :disabled-menus="[]"
    :theme="theme"
    @upload-image="handleUploadImage"
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

    return {
      text: ''
    }
  },
  methods: {
    handleUploadImage (event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);
      
      insertImage({
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
        desc: 'desc'
      })
    }
  }
}
</script>