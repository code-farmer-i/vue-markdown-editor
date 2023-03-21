"use strict";

// Modified from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/highlightLines.js
// It depends on preWrapper plugin.

module.exports = function (md, options) {
  if (options === void 0) {
    options = {};
  }
  var fence = md.renderer.rules.fence;
  var _options = options,
    _options$leftDelimite = _options.leftDelimiter,
    leftDelimiter = _options$leftDelimite === void 0 ? '{' : _options$leftDelimite,
    _options$rightDelimit = _options.rightDelimiter,
    rightDelimiter = _options$rightDelimit === void 0 ? '}' : _options$rightDelimit;
  var RE = new RegExp(leftDelimiter + "([\\d,-]+)" + rightDelimiter);
  md.renderer.rules.fence = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var rawCode = fence.apply(void 0, args);
    var tokens = args[0],
      idx = args[1];
    var token = tokens[idx];
    if (!token.lineNumbers) {
      var rawInfo = token.info;
      if (!rawInfo || !RE.test(rawInfo)) {
        return fence.apply(void 0, args);
      }
      var langName = rawInfo.replace(RE, '').trim();
      // ensure the next plugin get the correct lang.
      token.info = langName;
      token.lineNumbers = RE.exec(rawInfo)[1].split(',').map(function (v) {
        return v.split('-').map(function (v) {
          return parseInt(v, 10);
        });
      });
    }
    var code = rawCode.slice(rawCode.indexOf('<code>'), rawCode.indexOf('</code>'));
    var highlightLinesCode = code.split('\n').map(function (split, index) {
      var lineNumber = index + 1;
      var inRange = token.lineNumbers.some(function (_ref) {
        var start = _ref[0],
          end = _ref[1];
        if (start && end) {
          return lineNumber >= start && lineNumber <= end;
        }
        return lineNumber === start;
      });
      if (inRange) {
        return '<div class="highlighted">&nbsp;</div>';
      }
      return '<br>';
    }).join('');
    var highlightLinesWrapperCode = "<div class=\"highlight-lines\">" + highlightLinesCode + "</div>";
    var finalCode = rawCode.replace('<!--beforeend-->', highlightLinesWrapperCode + "<!--beforeend-->");
    return finalCode;
  };
};