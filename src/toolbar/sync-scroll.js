import { syncScroll } from '@/utils/constants/command';

export default {
  name: syncScroll,
  icon: 'v-md-icon-sync',
  title: (editor) => (editor.enableSyncScroll ? '关闭同步滚动' : '开启同步滚动'),
  active: (editor) => editor.enableSyncScroll,
  action(editor) {
    editor.execCommand(syncScroll, !editor.enableSyncScroll);
  },
};
