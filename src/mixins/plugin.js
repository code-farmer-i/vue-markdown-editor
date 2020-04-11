import { getGlobal } from '@/utils/global';

export default {
  created() {
    const plugins = [...(getGlobal('plugins') || []), ...(this.theme.plugins || [])];

    if (!plugins.length) return;

    plugins.forEach((plugin) => {
      const { toolbar, command } = plugin;

      if (toolbar) this.registerToolbar(toolbar.name, toolbar);
      if (command) this.registerCommand(command.name, command.handler);
    });
  },
};
