"use strict";

exports.__esModule = true;
exports.default = commandHandler;
function commandHandler(editor, emojiType) {
  editor.insert(function () {
    var prefix = ':';
    var suffix = ':';
    return {
      text: "" + prefix + emojiType + suffix
    };
  });
}