"use strict";

exports.__esModule = true;
exports.default = _default;
function _default(md, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    getMarks = _options.getMarks;
  if (!getMarks) return;
  md.core.ruler.push('anchor', function (state) {
    var slugs = {};
    var tokens = state.tokens;
    tokens.filter(function (token) {
      return token.type === 'heading_open';
    }).forEach(function (token) {
      // Aggregate the next token children text.
      var heading = tokens[tokens.indexOf(token) + 1];
      var title = heading.content;
      var level = Number(token.tag.substr(1));
      slugs[title] = title in slugs ? Number(slugs[title]) + 1 : '';
      var marks = getMarks(title, level, slugs[title]);
      if (marks) {
        marks.forEach(function (_ref) {
          var attr = _ref.attr,
            value = _ref.value;
          token.attrPush([attr, value]);
        });
      }
    });
  });
}