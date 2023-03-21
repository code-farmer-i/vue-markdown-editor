"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.removeResizeListener = exports.addResizeListener = void 0;
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/resize-event.js

/* eslint-disable no-underscore-dangle */

var isServer = typeof window === 'undefined';

/* istanbul ignore next */
var resizeHandler = function resizeHandler(entries) {
  entries.forEach(function (entry) {
    var listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(function (fn) {
        fn();
      });
    }
  });
};

/* istanbul ignore next */
var addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new _resizeObserverPolyfill.default(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
exports.addResizeListener = addResizeListener;
var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};
exports.removeResizeListener = removeResizeListener;