import { deepAssign } from '@/utils/deep-assign';

export default class Lang {
  constructor(options = {}) {
    this.config = {
      lang: 'zh-CN',
      langConfig: {
        'zh-CN': {},
      },
    };

    this.options = options;
  }

  use(lang, config) {
    this.config.lang = lang;
    this.add({ [lang]: config });

    if (this.options.afterUse) this.options.afterUse(lang, config);
  }

  add(config = {}) {
    deepAssign(this.config.langConfig, config);
  }
}
