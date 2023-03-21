"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _xss = _interopRequireDefault(require("xss"));
var _svg = _interopRequireDefault(require("./svg"));
var _KaTex = _interopRequireDefault(require("./KaTex"));
var _common = require("./common");
var tagWhiteList = (0, _extends2.default)({}, _common.tags, _KaTex.default, _svg.default);
var options = {
  whiteList: (0, _extends2.default)({}, _xss.default.getDefaultWhiteList(), tagWhiteList),
  onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value) {
    if (_svg.default[tag] || _KaTex.default[tag] || _common.attrWhiteList.find(function (attr) {
      return attr === name;
    }) || _common.prefixAttrWhiteList.find(function (prefix) {
      return name.startsWith(prefix);
    })) {
      return name + "=\"" + _xss.default.escapeAttrValue(value) + "\"";
    }
  }
};
var xssFilterInstance = new _xss.default.FilterXSS(options);
xssFilterInstance.extend = function (extendOptions) {
  var instanceOptions = xssFilterInstance.options;
  Object.keys(extendOptions).forEach(function (optionName) {
    // extend whiteList
    if (optionName === 'whiteList') {
      Object.keys(extendOptions.whiteList).forEach(function (tagName) {
        var tagAttrWhiteList = extendOptions.whiteList[tagName];
        var instanceWhiteList = instanceOptions.whiteList;
        if (instanceWhiteList[tagName]) {
          instanceWhiteList[tagName] = [].concat(instanceWhiteList[tagName], tagAttrWhiteList);
        } else {
          instanceWhiteList[tagName] = tagAttrWhiteList;
        }
      });
    } else if (optionName === 'onIgnoreTagAttr') {
      var oldHandler = instanceOptions.onIgnoreTagAttr;
      instanceOptions.onIgnoreTagAttr = function () {
        var _extendOptions$onIgno;
        for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
          arg[_key] = arguments[_key];
        }
        var oldReturnVal = oldHandler.call.apply(oldHandler, [this].concat(arg));
        var newReturnVal = (_extendOptions$onIgno = extendOptions.onIgnoreTagAttr).call.apply(_extendOptions$onIgno, [this].concat(arg));
        return oldReturnVal || newReturnVal;
      };
    } else {
      instanceOptions[optionName] = extendOptions[optionName];
    }
  });
};
var _default = xssFilterInstance;
exports.default = _default;