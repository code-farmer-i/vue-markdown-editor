export default {
  name: 'save',
  icon: 'v-md-icon-save',
  title: (editor) => editor.langConfig.save.toolbar,
  action(editor) {
    editor.save();
  },
};
