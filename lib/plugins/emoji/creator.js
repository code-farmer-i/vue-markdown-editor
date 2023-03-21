"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = creator;
var _toolbar = _interopRequireDefault(require("./toolbar"));
var _command = _interopRequireDefault(require("./command"));
function creator(_ref) {
  var emojiJson = _ref.emojiJson,
    mdEmojiPlugin = _ref.mdEmojiPlugin;
  return function createEmojiPlugin(_temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? 'emoji' : _ref2$name,
      _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? 'v-md-icon-emoji' : _ref2$icon,
      text = _ref2.text,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? function (editor) {
        return editor.langConfig.emoji;
      } : _ref2$title,
      customEmoji = _ref2.customEmoji;
    var toolbar = (0, _toolbar.default)({
      commandName: name,
      title: title,
      text: text,
      icon: icon,
      emojiJson: emojiJson
    });
    var extendMarkdown = function extendMarkdown(mdParser) {
      if (mdParser) {
        // extend markdown-it
        mdParser.use(mdEmojiPlugin);
        if (customEmoji) {
          mdParser.renderer.rules.emoji = function (token, idx) {
            return '<span class="v-md-emoji emoji-' + token[idx].markup + '"></span>';
          };
        }
      }
    };
    return {
      install: function install(VMdEditor) {
        if (VMdEditor.name === 'v-md-editor') {
          VMdEditor.command(name, _command.default);
          VMdEditor.toolbar(name, toolbar);
          VMdEditor.lang.add({
            'zh-CN': {
              emoji: '插入emoji表情'
            },
            'en-US': {
              emoji: 'Insert emoji'
            }
          });
        }
        VMdEditor.extendMarkdown(extendMarkdown);
      }
    };
  };
}