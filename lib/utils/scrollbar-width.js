"use strict";

exports.__esModule = true;
exports.default = _default;
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/scrollbar-width.js

var scrollBarWidth;
var isServer = typeof window === 'undefined';
function _default() {
  if (isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.className = 'scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
}