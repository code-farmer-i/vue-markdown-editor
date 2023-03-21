"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = createTipPlugin;
var _markdownItContainer = _interopRequireDefault(require("../../utils/markdown-it-container"));
function createTipPlugin(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'tip' : _ref$name,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'v-md-icon-tip' : _ref$icon,
    text = _ref.text;
  var commandHandler = function commandHandler(editor, type) {
    if (type === void 0) {
      type = 'tip';
    }
    editor.insert(function (selected) {
      var prefix = ':::';
      var suffix = ':::';
      var content = selected || editor.langConfig.tip[type].placeholder;
      return {
        text: prefix + " " + type + "\n  " + content + "\n" + suffix,
        selected: content
      };
    });
  };
  var toolbar = {
    title: function title(editor) {
      return editor.langConfig.tip.toolbar;
    },
    icon: icon,
    text: text,
    menus: [{
      name: 'tip',
      text: function text(editor) {
        return editor.langConfig.tip.tip.toolbar;
      },
      action: function action(editor) {
        editor.execCommand(name);
      }
    }, {
      name: 'warning',
      text: function text(editor) {
        return editor.langConfig.tip.warning.toolbar;
      },
      action: function action(editor) {
        editor.execCommand(name, 'warning');
      }
    }, {
      name: 'danger',
      text: function text(editor) {
        return editor.langConfig.tip.danger.toolbar;
      },
      action: function action(editor) {
        editor.execCommand(name, 'danger');
      }
    }, {
      name: 'details',
      text: function text(editor) {
        return editor.langConfig.tip.details.toolbar;
      },
      action: function action(editor) {
        editor.execCommand(name, 'details');
      }
    }]
  };
  var extendMarkdown = function extendMarkdown(mdParser, getLangConfig) {
    var blockClass = 'v-md-plugin-tip';
    if (mdParser) {
      // extend markdown-it
      (0, _markdownItContainer.default)(mdParser, {
        type: 'tip',
        defaultTitle: function defaultTitle() {
          return getLangConfig().tip.tip.defaultTitle;
        },
        blockClass: blockClass
      });
      (0, _markdownItContainer.default)(mdParser, {
        type: 'warning',
        defaultTitle: function defaultTitle() {
          return getLangConfig().tip.warning.defaultTitle;
        },
        blockClass: blockClass
      });
      (0, _markdownItContainer.default)(mdParser, {
        type: 'danger',
        defaultTitle: function defaultTitle() {
          return getLangConfig().tip.danger.defaultTitle;
        },
        blockClass: blockClass
      });
      (0, _markdownItContainer.default)(mdParser, {
        type: 'details',
        defaultTitle: function defaultTitle() {
          return getLangConfig().tip.details.defaultTitle;
        },
        before: function before(info) {
          return "<details class=\"" + blockClass + " details\">" + (info ? "<summary>" + info + "</summary>" : '') + "\n";
        },
        after: function after() {
          return '</details>\n';
        }
      });
    }
  };
  return {
    install: function install(VMdEditor) {
      if (VMdEditor.name === 'v-md-editor') {
        VMdEditor.command(name, commandHandler);
        VMdEditor.toolbar(name, toolbar);
      }
      VMdEditor.lang.add({
        'zh-CN': {
          tip: {
            toolbar: '插入提示',
            tip: {
              toolbar: '提示',
              defaultTitle: '提示',
              placeholder: '在此输入内容'
            },
            warning: {
              toolbar: '注意',
              defaultTitle: '注意',
              placeholder: '在此输入内容'
            },
            danger: {
              toolbar: '警告',
              defaultTitle: '警告',
              placeholder: '在此输入内容'
            },
            details: {
              toolbar: '详细信息',
              defaultTitle: '详细信息',
              placeholder: '内容'
            }
          }
        },
        'en-US': {
          tip: {
            toolbar: 'Insert tip',
            tip: {
              toolbar: 'Tip',
              defaultTitle: 'TIP',
              placeholder: 'Insert content'
            },
            warning: {
              toolbar: 'Warning',
              defaultTitle: 'WARNING',
              placeholder: 'Insert content'
            },
            danger: {
              toolbar: 'Danger',
              defaultTitle: 'DANGER',
              placeholder: 'Insert content'
            },
            details: {
              toolbar: 'Details',
              defaultTitle: 'DETAILS',
              placeholder: 'Content'
            }
          }
        }
      });
      VMdEditor.extendMarkdown(extendMarkdown);
    }
  };
}