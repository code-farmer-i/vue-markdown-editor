import { fullscreen } from '@/utils/constants/command';

export default {
  name: fullscreen,
  icon: 'v-md-icon-fullscreen',
  title: (editor) => (editor.fullscreen ? '退出全屏' : '全屏（按ESC还原）'),
  active: (editor) => editor.fullscreen,
  action(editor) {
    editor.execCommand(fullscreen, !editor.fullscreen);
  },
};
