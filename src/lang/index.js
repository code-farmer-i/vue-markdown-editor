import Vue from 'vue';
import { deepAssign } from '@/utils/deep-assign';
import zhCNConfig from './zh-CN';

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$vMdEditorLang', 'zh-CN');
defineReactive(proto, '$vMdEditorLangConfig', {
  'zh-CN': zhCNConfig,
});

export default {
  use(lang, config) {
    proto.$vMdEditorLang = lang;
    this.add({ [lang]: config });
  },

  add(config = {}) {
    deepAssign(proto.$vMdEditorLangConfig, config);
  },
};
