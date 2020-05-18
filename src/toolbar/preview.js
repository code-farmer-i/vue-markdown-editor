import EDITOR_MODE from '@/utils/constants/editor-mode';

export default {
  name: 'preview',
  icon: 'v-md-icon-preview',
  title: (editor) => (editor.currentMode === EDITOR_MODE.EDITABLE ? '关闭预览' : '开启预览'),
  active: (editor) => editor.currentMode === EDITOR_MODE.EDITABLE,
  action(editor) {
    editor.currentMode =
      editor.currentMode === EDITOR_MODE.EDITABLE ? EDITOR_MODE.EDIT : EDITOR_MODE.EDITABLE;
  },
};
