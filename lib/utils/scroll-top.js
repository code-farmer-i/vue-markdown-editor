"use strict";

exports.__esModule = true;
exports.getScrollTop = getScrollTop;
exports.scrollTo = scrollTo;
function getScrollTop(target) {
  var result = 0;
  if (target === window) {
    result = target.pageYOffset;
  } else if (target) {
    result = target.scrollTop;
  }
  return result;
}
function scrollTo(target, scrollTop) {
  if (target === window) {
    window.scrollTo(window.pageYOffset, scrollTop);
  } else if (target) {
    target.scrollTop = scrollTop;
  }
}