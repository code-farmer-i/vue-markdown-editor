"use strict";

exports.__esModule = true;
exports.deepAssign = deepAssign;
var _util = require("./util");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function assignKey(to, from, key) {
  var val = from[key];
  if (val === undefined || val === null) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || !(0, _util.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}