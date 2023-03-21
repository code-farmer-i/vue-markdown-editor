"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = createTodoListPlugin;
var _toolbar = _interopRequireDefault(require("./toolbar"));
var _command = _interopRequireDefault(require("./command"));
var _markdownItTodoList = _interopRequireDefault(require("../../utils/markdown-it-todo-list"));
function createTodoListPlugin(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'todo-list' : _ref$name,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'v-md-icon-checkbox' : _ref$icon,
    text = _ref.text,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#3eaf7c' : _ref$color;
  var toolbar = (0, _toolbar.default)({
    commandName: name,
    title: function title(editor) {
      return editor.langConfig.task.toolbar + "\uFF08Ctrl+Shift+U\uFF09";
    },
    text: text,
    icon: icon
  });
  var defaultBorderColor = '#d9d9d9';
  var border = function border(type) {
    return "border-color: " + (type === 'todo' ? defaultBorderColor : color);
  };
  var background = "background-color: " + color;
  var extendMarkdown = function extendMarkdown(mdParser) {
    if (mdParser) {
      // extend markdown-it
      mdParser.use(_markdownItTodoList.default, {
        renderCheckbox: function renderCheckbox(type) {
          var checkboxClass = 'v-md-editor__todo-list-checkbox';
          var style = type === 'todo' ? "" + border(type) : border(type) + ";" + background;
          return "<span class=\"" + checkboxClass + (type === 'todo' ? '' : " " + checkboxClass + "--checked") + "\" style=\"" + style + "\"></span>";
        }
      });
    }
  };
  return {
    install: function install(VMdEditor) {
      if (VMdEditor.name === 'v-md-editor') {
        VMdEditor.command(name, _command.default);
        VMdEditor.toolbar(name, toolbar);
        VMdEditor.hotkey({
          modifier: 'ctrlShift',
          key: 'u',
          action: function action(editor) {
            editor.execCommand(name);
          }
        });
        VMdEditor.lang.add({
          'zh-CN': {
            task: {
              toolbar: '任务列表',
              placeholder: '任务列表'
            }
          },
          'en-US': {
            task: {
              toolbar: 'Task',
              placeholder: 'Task'
            }
          }
        });
      }
      VMdEditor.extendMarkdown(extendMarkdown);
    }
  };
}