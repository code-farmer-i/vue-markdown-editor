"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _vue = _interopRequireDefault(require("vue"));
var _deepAssign = require("../utils/deep-assign");
var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vMdEditorLang', 'zh-CN');
defineReactive(proto, '$vMdEditorLangConfig', {
  'zh-CN': {}
});
var _default = {
  use: function use(lang, config) {
    var _this$add;
    proto.$vMdEditorLang = lang;
    this.add((_this$add = {}, _this$add[lang] = config, _this$add));
  },
  add: function add(config) {
    if (config === void 0) {
      config = {};
    }
    (0, _deepAssign.deepAssign)(proto.$vMdEditorLangConfig, config);
  }
};
exports.default = _default;