import { importAll } from '@/utils/util';

const defaultCommands = {};
importAll(defaultCommands, require.context('@/command', false, /\.(js)$/));

export default {
  created() {
    this.commands = {};

    Object.values(defaultCommands).forEach((command) => {
      const { name, default: callback } = command;

      this.registerCommand(name, callback);
    });
  },
  methods: {
    registerCommand(name, callback) {
      if (name) {
        if (!this.commands[name]) {
          if (typeof callback === 'function') {
            this.commands[name] = callback;
          } else {
            console.error(`The command must be registered as a function: ${name}`);
          }
        } else {
          console.error(`The command name is already in use: ${name}`);
        }
      } else {
        console.error('Command name is required');
      }
    },
    execCommand(name, ...arg) {
      const commandCallBack = this.commands[name];

      if (commandCallBack) {
        commandCallBack(this, ...arg);
      } else {
        console.error(`Command not found: ${name}`);
      }
    },
  },
};
