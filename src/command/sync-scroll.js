export { syncScroll as name } from '@/utils/constants/command.js';

export default function (editor, isEnable) {
  editor.toggleSyncScroll(isEnable);
}
