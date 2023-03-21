"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
// Modified from https://github.com/Oktavilla/markdown-it-table-of-contents/blob/master/index.js

/* eslint-disable */
var defaults = {
  includeLevel: [2, 3],
  containerClass: 'table-of-contents',
  listClass: 'table-of-content-list',
  listItemClass: 'table-of-content-list-item',
  markerPattern: /^\[\[toc\]\]/im,
  listType: 'ul',
  getAnchorAttrs: function getAnchorAttrs() {
    return [];
  },
  format: undefined,
  forceFullToc: false,
  containerHeaderHtml: undefined,
  containerFooterHtml: undefined,
  transformLink: undefined
};
function _default(md, o) {
  var options = (0, _extends2.default)({}, defaults, o);
  var tocRegexp = options.markerPattern;
  var gstate;
  function toc(state, silent) {
    var token;
    var match;

    // Reject if the token does not start with [
    if (state.src.charCodeAt(state.pos) !== 0x5b /* [ */) {
      return false;
    }
    // Don't run any pairs in validation mode
    if (silent) {
      return false;
    }

    // Detect TOC markdown
    match = tocRegexp.exec(state.src.substr(state.pos));
    match = !match ? [] : match.filter(function (m) {
      return m;
    });
    if (match.length < 1) {
      return false;
    }

    // Build content
    token = state.push('toc_open', 'toc', 1);
    token.markup = '[[toc]]';
    token = state.push('toc_body', '', 0);
    token = state.push('toc_close', 'toc', -1);

    // Update pos so the parser can continue
    var newline = state.src.indexOf('\n', state.pos);
    if (newline !== -1) {
      state.pos = newline;
    } else {
      state.pos = state.pos + state.posMax + 1;
    }
    return true;
  }
  md.renderer.rules.toc_open = function (tokens, index) {
    var tocOpenHtml = "<div class=\"" + options.containerClass + "\">";
    if (options.containerHeaderHtml) {
      tocOpenHtml += options.containerHeaderHtml;
    }
    return tocOpenHtml;
  };
  md.renderer.rules.toc_close = function (tokens, index) {
    var tocFooterHtml = '';
    if (options.containerFooterHtml) {
      tocFooterHtml = options.containerFooterHtml;
    }
    return tocFooterHtml + '</div>';
  };
  md.renderer.rules.toc_body = function (tokens, index) {
    var slugs = {};
    if (options.forceFullToc) {
      var tocBody = '';
      var pos = 0;
      var tokenLength = gstate && gstate.tokens && gstate.tokens.length;
      while (pos < tokenLength) {
        var tocHierarchy = renderChildsTokens(pos, gstate.tokens, slugs);
        pos = tocHierarchy[0];
        tocBody += tocHierarchy[1];
      }
      return tocBody;
    }
    return renderChildsTokens(0, gstate.tokens, slugs)[1];
  };
  function renderChildsTokens(pos, tokens, slugs) {
    var headings = [];
    var buffer = '';
    var currentLevel;
    var subHeadings;
    var size = tokens.length;
    var i = pos;
    while (i < size) {
      var token = tokens[i];
      var heading = tokens[i - 1];
      var level = token.tag && parseInt(token.tag.substr(1, 1));
      if (token.type !== 'heading_close' || options.includeLevel.indexOf(level) == -1 || heading.type !== 'inline') {
        i++;
        continue; // Skip if not matching criteria
      }

      if (!currentLevel) {
        currentLevel = level; // We init with the first found level
      } else {
        if (level > currentLevel) {
          subHeadings = renderChildsTokens(i, tokens, slugs);
          buffer += subHeadings[1];
          i = subHeadings[0];
          continue;
        }
        if (level < currentLevel) {
          // Finishing the sub headings
          buffer += '</li>';
          headings.push(buffer);
          return [i, "<" + options.listType + " class=\"" + options.listClass + "\">" + headings.join('') + "</" + options.listType + ">"];
        }
        if (level == currentLevel) {
          // Finishing the sub headings
          buffer += '</li>';
          headings.push(buffer);
        }
      }
      var content = heading.children.reduce(function (acc, t) {
        return acc + t.content;
      }, '');
      var title = heading.content;
      var unique = slugs[title] = title in slugs ? Number(slugs[title]) + 1 : '';
      var anchorAttrs = options.getAnchorAttrs(title, level, unique);
      buffer = "<li class=\"" + options.listItemClass + "\">\n      <a " + anchorAttrs.map(function (_ref) {
        var attr = _ref.attr,
          value = _ref.value;
        return attr + "=\"" + value + "\"";
      }).join(' ') + ">";
      buffer += content;
      buffer += '</a>';
      i++;
    }
    buffer += buffer === '' ? '' : '</li>';
    headings.push(buffer);
    return [i, "<" + options.listType + " class=\"" + options.listClass + "\">" + headings.join('') + "</" + options.listType + ">"];
  }

  // Catch all the tokens for iteration later
  md.core.ruler.push('grab_state', function (state) {
    gstate = state;
  });

  // Insert TOC
  md.inline.ruler.after('emphasis', 'toc', toc);
}