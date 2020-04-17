import registerCommand from '@/utils/command';

export default function (Component) {
  return {
    created() {
      const { commands } = Component;

      this.commands = {};

      Object.keys(commands).forEach((name) => {
        this.registerCommand(name, commands[name]);
      });
    },
    methods: {
      registerCommand(name, callback) {
        registerCommand(this.commands, name, callback);
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
}
