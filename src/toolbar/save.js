export default {
  name: 'save',
  icon: 'v-md-icon-save',
  title: '保存（Ctrl+S）',
  action(editor) {
    editor.save();
  },
};
