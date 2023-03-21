"use strict";

exports.__esModule = true;
exports.default = void 0;
var _keyCodes = require("./key-codes");
var Hotkeys = /*#__PURE__*/function () {
  function Hotkeys() {
    this.hotkeys = {
      ctrl: {},
      shift: {},
      ctrlAlt: {},
      ctrlShift: {},
      keys: {}
    };
  }
  var _proto = Hotkeys.prototype;
  _proto.dispatch = function dispatch(e) {
    var keyName = this.getKeyName(e).toLowerCase();
    var opt;
    if (!keyName) return;
    if (this.isKeyEnterExact(e)) {
      opt = this.hotkeys.keys[keyName];
    } else if (this.isCtrlEnterExact(e)) {
      opt = this.hotkeys.ctrl[keyName];
    } else if (this.isShiftEnterExact(e)) {
      opt = this.hotkeys.shift[keyName];
    } else if (this.isCtrlAltEnterExact(e)) {
      opt = this.hotkeys.ctrlAlt[keyName];
    } else if (this.isCtrlShiftEnterExact(e)) {
      opt = this.hotkeys.ctrlShift[keyName];
    }
    if (opt) {
      var _opt = opt,
        action = _opt.action,
        preventDefault = _opt.preventDefault;
      if (preventDefault) e.preventDefault();
      action(e);
    }
  };
  _proto.isKeyEnterExact = function isKeyEnterExact(e) {
    return !this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  };
  _proto.isCtrlShiftEnterExact = function isCtrlShiftEnterExact(e) {
    return this.isCtrlEnter(e) && this.isShiftEnter(e) && !this.isAltEnter(e);
  };
  _proto.isCtrlAltEnterExact = function isCtrlAltEnterExact(e) {
    return this.isCtrlEnter(e) && this.isAltEnter(e) && !this.isShiftEnter(e);
  };
  _proto.isCtrlEnterExact = function isCtrlEnterExact(e) {
    return this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  };
  _proto.isShiftEnterExact = function isShiftEnterExact(e) {
    return this.isShiftEnter(e) && !this.isCtrlEnter(e) && !this.isAltEnter(e);
  };
  _proto.isCtrlEnter = function isCtrlEnter(e) {
    return e.ctrlKey || e.metaKey;
  };
  _proto.isShiftEnter = function isShiftEnter(e) {
    return e.shiftKey;
  };
  _proto.isAltEnter = function isAltEnter(e) {
    return e.altKey;
  };
  _proto.registerHotkeys = function registerHotkeys(_ref) {
    var modifier = _ref.modifier,
      key = _ref.key,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      action = _ref.action;
    if (modifier) {
      this.hotkeys[modifier][key] = {
        preventDefault: preventDefault,
        action: action
      };
    } else {
      this.hotkeys.keys[key] = {
        preventDefault: preventDefault,
        action: action
      };
    }
  };
  _proto.getKeyName = function getKeyName(e) {
    var key = e.key,
      keyCode = e.keyCode;
    if (key !== undefined) {
      var keyName = Object.keys(_keyCodes.keyNames).find(function (keyName) {
        var validNames = _keyCodes.keyNames[keyName];
        return typeof validNames === 'string' ? validNames === key : validNames.indexOf(key) !== -1;
      });
      return keyName || key;
    }
    return _keyCodes.keyCodesToName[keyCode];
  };
  return Hotkeys;
}();
var _default = Hotkeys;
exports.default = _default;