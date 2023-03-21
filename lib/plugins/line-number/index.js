"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _lineNumbers = _interopRequireDefault(require("@vuepress/markdown/lib/lineNumbers"));
var extendMarkdown = function extendMarkdown(mdParser) {
  if (mdParser) {
    mdParser.use(_lineNumbers.default);
  }
};
function _default() {
  return {
    install: function install(VMdEditor) {
      VMdEditor.extendMarkdown(extendMarkdown);
    }
  };
}