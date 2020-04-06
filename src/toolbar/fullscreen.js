import { name } from '@/command/fullscreen';

export default {
  name,
  icon: 'fa fa-md-arrows-alt',
  title: (editor) => (editor.fullscreen ? '退出全屏（按ESC还原）' : '全屏（按ESC还原）'),
  active: (editor) => editor.fullscreen,
  action(editor) {
    editor.execCommand(name, !editor.fullscreen);
  },
};
