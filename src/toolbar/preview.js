import EDITOR_MODE from '@/utils/constants/editor-mode';

export default {
  name: 'preview',
  icon: 'v-md-icon-preview',
  title: (editor) => {
    const previewLang = editor.langConfig.preview;

    return editor.currentMode === EDITOR_MODE.EDITABLE ? previewLang.disabled : previewLang.enabled;
  },
  active: (editor) => editor.currentMode === EDITOR_MODE.EDITABLE,
  action(editor) {
    editor.currentMode =
      editor.currentMode === EDITOR_MODE.EDITABLE ? EDITOR_MODE.EDIT : EDITOR_MODE.EDITABLE;
  },
};
