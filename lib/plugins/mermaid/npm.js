"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _creator = _interopRequireDefault(require("./creator"));
var _mermaidMin = _interopRequireDefault(require("mermaid/dist/mermaid.min.js"));
var _default = (0, _creator.default)(_mermaidMin.default);
exports.default = _default;