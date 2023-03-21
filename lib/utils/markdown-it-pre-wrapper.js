"use strict";

// Modified from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/preWrapper.js

module.exports = function (md, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$getWrapperCl = _options.getWrapperClass,
    getWrapperClass = _options$getWrapperCl === void 0 ? function (lang) {
      return "language-" + lang;
    } : _options$getWrapperCl;
  var wrap = function wrap(wrapped) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var tokens = args[0],
        idx = args[1];
      var token = tokens[idx];
      var rawCode = wrapped.apply(void 0, args);
      return "<!--beforebegin--><div class=\"" + getWrapperClass(token.info.trim()) + " extra-class\" extra-attr>" + ("<!--afterbegin-->" + rawCode + "<!--beforeend--></div><!--afterend-->");
    };
  };
  var _md$renderer$rules = md.renderer.rules,
    fence = _md$renderer$rules.fence,
    codeBlock = _md$renderer$rules.code_block;
  md.renderer.rules.fence = wrap(fence);
  md.renderer.rules.code_block = wrap(codeBlock);
};