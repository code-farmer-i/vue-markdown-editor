"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = createCopyCodePlugin;
var _markdownItCopyCode = _interopRequireDefault(require("../../utils/markdown-it-copy-code"));
var _preview = _interopRequireDefault(require("./preview"));
function createCopyCodePlugin() {
  return {
    install: function install(VMdEditor) {
      VMdEditor.extendMarkdown(function (mdParser) {
        mdParser.use(_markdownItCopyCode.default);
      });
      VMdEditor.use((0, _preview.default)());
    }
  };
}