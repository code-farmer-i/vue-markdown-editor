"use strict";

exports.__esModule = true;
exports.default = _default;
function _default(md, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$lineMarkup = _ref.lineMarkup,
    lineMarkup = _ref$lineMarkup === void 0 ? 'data-line' : _ref$lineMarkup;
  var defaultRender = function defaultRender(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  function addAttrwrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      var token = tokens[idx];
      token.attrPush([lineMarkup, token.map[0] + 1]);
      return originalRender(tokens, idx, options, env, self);
    };
  }
  function modifyCodewrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      var rawCode = originalRender(tokens, idx, options, env, self);
      var token = tokens[idx];
      var lineNumber = token.map[0] + 1;
      return "<div " + lineMarkup + "=\"" + lineNumber + "\">" + rawCode + "</div>";
    };
  }
  var wrapperMap = {
    table_open: addAttrwrapper,
    blockquote_open: addAttrwrapper,
    bullet_list_open: addAttrwrapper,
    ordered_list_open: addAttrwrapper,
    reference_open: addAttrwrapper,
    heading_open: addAttrwrapper,
    lheading_open: addAttrwrapper,
    paragraph_open: addAttrwrapper,
    hr: addAttrwrapper,
    html_block: modifyCodewrapper,
    code_block: modifyCodewrapper,
    fence: modifyCodewrapper
  };
  Object.keys(wrapperMap).forEach(function (ruleName) {
    var originalRender = md.renderer.rules[ruleName];
    var render = originalRender || defaultRender;
    md.renderer.rules[ruleName] = wrapperMap[ruleName](render);
  });
}