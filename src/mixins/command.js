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
      if (!this.commands[name]) {
        this.commands[name] = callback;
      } else {
        console.error(`The command name is already in use: ${name}`);
      }
    },
    execCommand(name) {
      const commandCallBack = this.commands[name];

      if (commandCallBack) {
        if (typeof commandCallBack === 'function') {
          commandCallBack(this);
        } else {
          console.error(`The command must be registered as a function: ${name}`);
        }
      } else {
        console.error(`Command not registered: ${name}`);
      }
    },
  },
};
