"use strict";

exports.__esModule = true;
exports.default = createToolbar;
exports.generatorMenuItems = generatorMenuItems;
function generatorMenuItems(emojiJson, commandName) {
  return Object.keys(emojiJson).map(function (emojiType) {
    return {
      name: emojiType,
      text: emojiJson[emojiType],
      class: 'v-md-emoji-panel-item',
      action: function action(editor) {
        editor.execCommand(commandName, emojiType);
      }
    };
  });
}
function createToolbar(_ref) {
  var commandName = _ref.commandName,
    emojiJson = _ref.emojiJson,
    text = _ref.text,
    title = _ref.title,
    icon = _ref.icon;
  return {
    title: title,
    icon: icon,
    text: text,
    menus: {
      mode: 'panel',
      items: generatorMenuItems(emojiJson, commandName)
    }
  };
}