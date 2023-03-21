"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _markdownItEmoji = _interopRequireDefault(require("markdown-it-emoji"));
var _full = _interopRequireDefault(require("markdown-it-emoji/lib/data/full.json"));
var _creator = _interopRequireDefault(require("./creator"));
var _default = (0, _creator.default)({
  emojiJson: _full.default,
  mdEmojiPlugin: _markdownItEmoji.default
});
exports.default = _default;