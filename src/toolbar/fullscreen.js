import { fullscreen } from '@/utils/constants/command';

export default {
  name: fullscreen,
  icon: 'v-md-icon-fullscreen',
  title: (editor) => {
    const fullscreenLang = editor.langConfig.fullscreen;

    return editor.fullscreen ? fullscreenLang.disabled : fullscreenLang.enabled;
  },
  active: (editor) => editor.fullscreen,
  action(editor) {
    editor.execCommand(fullscreen, !editor.fullscreen);
  },
};
