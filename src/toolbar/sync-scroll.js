import { syncScroll } from '@/utils/constants/command';

export default {
  name: syncScroll,
  icon: 'v-md-icon-sync',
  title: (editor) => {
    const syncScrollLang = editor.langConfig.syncScroll;

    return editor.enableSyncScroll ? syncScrollLang.disabled : syncScrollLang.enabled;
  },
  active: (editor) => editor.enableSyncScroll,
  action(editor) {
    editor.execCommand(syncScroll, !editor.enableSyncScroll);
  },
};
