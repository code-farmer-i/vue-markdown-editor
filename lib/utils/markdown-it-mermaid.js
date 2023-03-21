"use strict";

module.exports = function (md, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'v-md-mermaid' : _ref$className;
  var wrap = function wrap(wrapped) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var tokens = args[0],
        idx = args[1];
      var token = tokens[idx];
      var rawCode = wrapped.apply(void 0, args);
      if (token.info === 'mermaid') {
        return "<pre class=\"" + className + "\">" + token.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</pre>";
      }
      return rawCode;
    };
  };
  var _md$renderer$rules = md.renderer.rules,
    fence = _md$renderer$rules.fence,
    codeBlock = _md$renderer$rules.code_block;
  md.renderer.rules.fence = wrap(fence);
  md.renderer.rules.code_block = wrap(codeBlock);
};