"use strict";

exports.__esModule = true;
exports.default = smoothScroll;
exports.smooth = smooth;
var _scrollTop = require("./scroll-top");
function smooth(_ref) {
  var currentScrollTop = _ref.currentScrollTop,
    scrollToTop = _ref.scrollToTop,
    scrollFn = _ref.scrollFn,
    _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 10 : _ref$percent,
    onScrollEnd = _ref.onScrollEnd;
  var scrollWay = scrollToTop > currentScrollTop ? 'down' : 'up';
  var step = (scrollToTop - currentScrollTop) * (percent / 100);
  var id;
  var scroll = function scroll() {
    currentScrollTop += step;
    if (scrollWay === 'down' && currentScrollTop >= scrollToTop || scrollWay === 'up' && currentScrollTop <= scrollToTop) {
      scrollFn(scrollToTop);
      window.cancelAnimationFrame(id);
      if (onScrollEnd) window.requestAnimationFrame(onScrollEnd);
    } else {
      scrollFn(currentScrollTop);
      window.requestAnimationFrame(scroll);
    }
  };
  window.requestAnimationFrame(scroll);
}
function smoothScroll(_ref2) {
  var scrollTarget = _ref2.scrollTarget,
    scrollToTop = _ref2.scrollToTop,
    _ref2$percent = _ref2.percent,
    percent = _ref2$percent === void 0 ? 10 : _ref2$percent,
    onScrollEnd = _ref2.onScrollEnd;
  var currentScrollTop = (0, _scrollTop.getScrollTop)(scrollTarget);
  smooth({
    currentScrollTop: currentScrollTop,
    scrollToTop: scrollToTop,
    scrollFn: function scrollFn(scrollTop) {
      return (0, _scrollTop.scrollTo)(scrollTarget, scrollTop);
    },
    percent: percent,
    onScrollEnd: onScrollEnd
  });
}