"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _creator = _interopRequireDefault(require("./creator"));
var _katex = _interopRequireDefault(require("katex"));
var _default = (0, _creator.default)(_katex.default);
exports.default = _default;