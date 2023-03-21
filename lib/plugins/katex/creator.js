"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _markdownItKatex = _interopRequireDefault(require("../../utils/markdown-it-katex"));
function _default(katex) {
  return function createKatexPlugin(options) {
    var extendMarkdown = function extendMarkdown(mdParser) {
      if (mdParser && katex) {
        mdParser.use(_markdownItKatex.default, (0, _extends2.default)({}, options, {
          katex: katex
        }));
      }
    };
    return {
      install: function install(VMdEditor) {
        VMdEditor.extendMarkdown(extendMarkdown);
      }
    };
  };
}