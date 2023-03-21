"use strict";

exports.__esModule = true;
exports.commandWrapper = commandWrapper;
exports.default = registerCommand;
var _util = require("./util");
var defaultCommands = {};
(0, _util.importAll)(defaultCommands, require.context('@/command', false, /\.(js)$/));
function registerCommand(target, commandName, callback) {
  if (commandName) {
    if (typeof callback === 'function') {
      target[commandName] = callback;
    } else {
      console.error("The command must be registered as a function: " + commandName);
    }
  } else {
    console.error('Command name is required');
  }
}
function commandWrapper(component) {
  component.commands = {};
  component.command = function (commandName, callback) {
    registerCommand(component.commands, commandName, callback);
  };
  Object.keys(defaultCommands).forEach(function (key) {
    var module = defaultCommands[key];
    var name = module.name,
      callback = module.default;
    component.command(name, callback);
  });
}