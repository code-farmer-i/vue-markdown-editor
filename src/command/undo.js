export { undo as name } from '@/utils/constants/command.js';

export default function (editor) {
  editor.undo();
}
