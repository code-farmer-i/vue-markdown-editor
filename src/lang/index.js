import { reactive } from 'vue';
import { deepAssign } from '@/utils/deep-assign';

const vMdEditorlangConfig = reactive({
  lang: 'zh-CN',
  langConfig: {
    'zh-CN': {},
  },
});

export { vMdEditorlangConfig };

export default {
  use(lang, config) {
    vMdEditorlangConfig.lang = lang;
    this.add({ [lang]: config });
  },

  add(config = {}) {
    deepAssign(vMdEditorlangConfig.langConfig, config);
  },
};
