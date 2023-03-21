"use strict";

// Modified from https://github.com/revin/markdown-it-task-lists/blob/master/index.js

/* eslint-disable */
module.exports = function (md, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$listClass = _options.listClass,
    listClass = _options$listClass === void 0 ? 'v-md-editor__todo-list' : _options$listClass,
    _options$listItemClas = _options.listItemClass,
    listItemClass = _options$listItemClas === void 0 ? 'v-md-editor__todo-list-item' : _options$listItemClas,
    _options$renderCheckb = _options.renderCheckbox,
    renderCheckbox = _options$renderCheckb === void 0 ? function (type) {
      return "<input class=\"v-md-editor__todo-list-checkbox\" type=\"checkbox\" " + (type === 'todo' ? '' : 'checked') + ">";
    } : _options$renderCheckb;
  function attrSet(token, name, value) {
    var index = token.attrIndex(name);
    var attr = [name, value];
    if (index < 0) {
      token.attrPush(attr);
    } else {
      token.attrs[index] = attr;
    }
  }
  function parentToken(tokens, index) {
    var targetLevel = tokens[index].level - 1;
    for (var i = index - 1; i >= 0; i--) {
      if (tokens[i].level === targetLevel) {
        return i;
      }
    }
    return -1;
  }
  function isTodoItem(tokens, index) {
    return isInline(tokens[index]) && isParagraph(tokens[index - 1]) && isListItem(tokens[index - 2]) && startsWithTodoMarkdown(tokens[index]);
  }
  function todoify(token, TokenConstructor) {
    token.children.unshift(makeCheckbox(token, TokenConstructor));
    token.children[1].content = token.children[1].content.slice(3);
    token.content = token.content.slice(3);
  }
  function makeCheckbox(token, TokenConstructor) {
    var checkbox = new TokenConstructor('html_inline', '', 0);
    if (token.content.indexOf('[ ] ') === 0) {
      checkbox.content = renderCheckbox('todo');
    } else if (token.content.indexOf('[x] ') === 0 || token.content.indexOf('[X] ') === 0) {
      checkbox.content = renderCheckbox('completed');
    }
    return checkbox;
  }
  function isInline(token) {
    return token.type === 'inline';
  }
  function isParagraph(token) {
    return token.type === 'paragraph_open';
  }
  function isListItem(token) {
    return token.type === 'list_item_open';
  }
  function startsWithTodoMarkdown(token) {
    // leading whitespace in a list item is already trimmed off by markdown-it
    return token.content.indexOf('[ ] ') === 0 || token.content.indexOf('[x] ') === 0 || token.content.indexOf('[X] ') === 0;
  }
  md.core.ruler.after('inline', 'v-md-task-lists', function (state) {
    var tokens = state.tokens;
    for (var i = 2; i < tokens.length; i++) {
      if (isTodoItem(tokens, i)) {
        todoify(tokens[i], state.Token);
        attrSet(tokens[i - 2], 'class', listItemClass);
        attrSet(tokens[parentToken(tokens, i - 2)], 'class', listClass);
      }
    }
  });
};