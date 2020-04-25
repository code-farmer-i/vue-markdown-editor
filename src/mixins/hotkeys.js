import { importAll } from '@/utils/util';

const defaultHotkeys = {};
importAll(defaultHotkeys, require.context('@/hotkeys', false, /\.(js)$/));

export default function (Component) {
  return {
    mounted() {
      const { hotkeys } = Component;

      Object.values(defaultHotkeys).forEach((module) => {
        this.registerHotkeys(module.default);
      });

      hotkeys.forEach((config) => {
        this.registerHotkeys(config);
      });
    },
    methods: {
      registerHotkeys({ modifier, key, action }) {
        this.editorRegisterHotkeys({ modifier, key, action: (...arg) => action(this, ...arg) });
      },
    },
  };
}
