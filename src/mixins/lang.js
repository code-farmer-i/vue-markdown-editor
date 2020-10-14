import { vMdEditorlangConfig } from '@/lang/';

export default {
  computed: {
    langConfig() {
      return vMdEditorlangConfig.langConfig[vMdEditorlangConfig.lang];
    },
  },
};
