import { name } from '@/command/fullscreen';

export default {
  name,
  state: {
    isFullscreen: false,
  },
  icon: 'fa fa-md-arrows-alt',
  title: (state) => (state.isFullscreen ? '退出全屏' : '全屏'),
  active: (state) => state.isFullscreen,
  action(editor, state) {
    state.isFullscreen = !state.isFullscreen;
    editor.execCommand(name, state.isFullscreen);
  },
};
