"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _light = _interopRequireDefault(require("markdown-it-emoji/light"));
var _light2 = _interopRequireDefault(require("markdown-it-emoji/lib/data/light.json"));
var _creator = _interopRequireDefault(require("./creator"));
var _default = (0, _creator.default)({
  emojiJson: _light2.default,
  mdEmojiPlugin: _light.default
});
exports.default = _default;