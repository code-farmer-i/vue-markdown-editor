export default {
  name: 'toc',
  icon: 'v-md-icon-toc',
  title: (editor) => {
    const tocLang = editor.langConfig.toc;

    return editor.tocVisible ? tocLang.disabled : tocLang.enabled;
  },
  active: (editor) => editor.tocVisible,
  action(editor) {
    editor.toggleToc();
  },
};
