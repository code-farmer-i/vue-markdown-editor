import registerToolbar from '@/utils/toolbar';

export default function (Component) {
  return {
    props: {
      leftToolbar: {
        type: String,
        default:
          'undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save',
      },
      rightToolbar: {
        type: String,
        default: 'preview toc sync-scroll fullscreen',
      },
      toolbar: {
        type: Object,
        default: () => ({}),
      },
      disabledMenus: {
        type: Array,
        default: () => ['image/upload-image'],
      },
    },
    created() {
      const { toolbars } = Component;

      this.toolbars = {};

      Object.keys(toolbars).forEach((name) => {
        this.registerToolbar(name, toolbars[name]);
      });

      Object.keys(this.toolbar).forEach((name) => {
        this.registerToolbar(name, this.toolbar[name]);
      });
    },
    methods: {
      registerToolbar(name, config) {
        registerToolbar(this.toolbars, name, config);
      },
      handleToolbarItemClick(toolbar) {
        if (toolbar.action && !toolbar.menus?.length && typeof toolbar.action === 'function') {
          toolbar.action(this);
        }
      },
      handleToolbarMenuClick(menu) {
        if (menu.action && typeof menu.action === 'function') {
          menu.action(this);
        }
      },
    },
  };
}
