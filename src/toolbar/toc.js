export default {
  name: 'toc',
  icon: 'v-md-icon-toc',
  title: (editor) => (editor.tocVisible ? '关闭目录导航' : '开启目录导航'),
  active: (editor) => editor.tocVisible,
  action(editor) {
    editor.toggleToc();
  },
};
