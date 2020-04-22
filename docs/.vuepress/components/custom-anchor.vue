<template>
  <div>
    <ul>
      <li
        v-for="anchor in anchorList"
        @click="handleAnchorClick(anchor)"
      >
        <a style="cursor: pointer">{{anchor}}</a>
      </li>
    </ul>
    <v-md-editor
      v-model="text"
      mode="preview"
      :theme="theme"
      ref="editor"
    />
  </div>
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
      text,
      anchorList: ['Links', 'Install', 'Quick Start', 'Usage', 'Refrence']
    }
  },
  methods: {
    handleAnchorClick(anchor) {
      const { editor } = this.$refs;
      anchor = anchor
        .split(' ')
        .map((str) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase())
        .join('-');

      const heading = editor.$el.querySelector(`[data-v-md-heading=${anchor}]`); 

      if (heading) editor.previewScrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 60
      });
    }
  }
}
</script>