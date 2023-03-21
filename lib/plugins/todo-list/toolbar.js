"use strict";

exports.__esModule = true;
exports.default = createToolbar;
function createToolbar(_ref) {
  var commandName = _ref.commandName,
    text = _ref.text,
    title = _ref.title,
    icon = _ref.icon;
  return {
    title: title,
    icon: icon,
    text: text,
    action: function action(editor) {
      editor.execCommand(commandName, {
        type: 'todo'
      });
    }
  };
}