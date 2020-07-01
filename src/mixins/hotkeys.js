import { importAll } from '@/utils/util';

const defaultHotkeys = {};
importAll(defaultHotkeys, require.context('@/hotkeys', false, /\.(js)$/));

export default function (Component) {
  return {
    mounted() {
      if (this.isPreviewMode) return;

      const { hotkeys } = Component;

      Object.keys(defaultHotkeys).forEach((key) => {
        this.registerHotkeys(defaultHotkeys[key].default);
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
