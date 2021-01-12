import { importAll } from '@/utils/util';

const defaultCommands = {};
importAll(defaultCommands, require.context('@/command', false, /\.(js)$/));

export default function registerCommand(target, commandName, callback) {
  if (commandName) {
    if (!target[commandName]) {
      target[commandName] = callback;
    } else {
      console.error(`The command name is already in use: ${commandName}`);
    }
  } else {
    console.error('Command name is required');
  }
}

export function commandWrapper(component) {
  component.commands = {};

  component.command = function (commandName, callback) {
    registerCommand(component.commands, commandName, callback);
  };

  Object.keys(defaultCommands).forEach((key) => {
    const module = defaultCommands[key];
    const { name, default: callback } = module;

    component.command(name, callback);
  });
}
