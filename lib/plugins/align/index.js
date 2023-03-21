"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _markdownItContainer = _interopRequireDefault(require("../../utils/markdown-it-container"));
var extendMarkdown = function extendMarkdown(mdParser) {
  if (mdParser) {
    (0, _markdownItContainer.default)(mdParser, {
      type: 'align-left',
      defaultTitle: '',
      before: function before(info) {
        return "<div align=\"left\">" + (info || '') + "\n";
      },
      after: function after() {
        return '</div>\n';
      }
    });
    (0, _markdownItContainer.default)(mdParser, {
      type: 'align-center',
      defaultTitle: '',
      before: function before(info) {
        return "<div align=\"center\">" + (info || '') + "\n";
      },
      after: function after() {
        return '</div>\n';
      }
    });
    (0, _markdownItContainer.default)(mdParser, {
      type: 'align-right',
      defaultTitle: '',
      before: function before(info) {
        return "<div align=\"right\">" + (info || '') + "\n";
      },
      after: function after() {
        return '</div>\n';
      }
    });
  }
};
function _default() {
  return {
    install: function install(VMdEditor) {
      VMdEditor.extendMarkdown(extendMarkdown);
    }
  };
}