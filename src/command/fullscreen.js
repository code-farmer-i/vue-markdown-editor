export { fullscreen as name } from '@/utils/constants/command.js';

export default function (editor, fullScreen) {
  editor.toggleFullScreen(fullScreen);
}
