// Modified from https://github.com/revin/markdown-it-task-lists/blob/master/index.js

/* eslint-disable */
export default function (md, options = {}) {
  const {
    listClass = 'v-md-editor__todo-list',
    listItemClass = 'v-md-editor__todo-list-item',
    renderCheckbox = (type) =>
      `<input class="v-md-editor__todo-list-checkbox" type="checkbox" ${
        type === 'todo' ? '' : 'checked'
      }>`,
  } = options;

  function attrSet(token, name, value) {
    const index = token.attrIndex(name);
    const attr = [name, value];

    if (index < 0) {
      token.attrPush(attr);
    } else {
      token.attrs[index] = attr;
    }
  }

  function parentToken(tokens, index) {
    const targetLevel = tokens[index].level - 1;
    for (let i = index - 1; i >= 0; i--) {
      if (tokens[i].level === targetLevel) {
        return i;
      }
    }
    return -1;
  }

  function isTodoItem(tokens, index) {
    return (
      isInline(tokens[index]) &&
      isParagraph(tokens[index - 1]) &&
      isListItem(tokens[index - 2]) &&
      startsWithTodoMarkdown(tokens[index])
    );
  }

  function todoify(token, TokenConstructor) {
    token.children.unshift(makeCheckbox(token, TokenConstructor));
    token.children[1].content = token.children[1].content.slice(3);
    token.content = token.content.slice(3);
  }

  function makeCheckbox(token, TokenConstructor) {
    const checkbox = new TokenConstructor('html_inline', '', 0);

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
    return (
      token.content.indexOf('[ ] ') === 0 ||
      token.content.indexOf('[x] ') === 0 ||
      token.content.indexOf('[X] ') === 0
    );
  }

  md.core.ruler.after('inline', 'v-md-task-lists', (state) => {
    const { tokens } = state;
    for (let i = 2; i < tokens.length; i++) {
      if (isTodoItem(tokens, i)) {
        todoify(tokens[i], state.Token);
        attrSet(tokens[i - 2], 'class', listItemClass);
        attrSet(tokens[parentToken(tokens, i - 2)], 'class', listClass);
      }
    }
  });
}
