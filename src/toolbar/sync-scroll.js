import { name } from '@/command/sync-scroll';

export default {
  name,
  icon: 'v-md-icon-sync',
  title: (editor) => (editor.enableSyncScroll ? '关闭同步滚动' : '开启同步滚动'),
  active: (editor) => editor.enableSyncScroll,
  action(editor) {
    editor.execCommand(name, !editor.enableSyncScroll);
  },
};
