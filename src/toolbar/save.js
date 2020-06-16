export default {
  name: 'save',
  icon: 'v-md-icon-save',
  title: (editor) => `${editor.langConfig.save.toolbar}（Ctrl+S）`,
  action(editor) {
    editor.save();
  },
};
