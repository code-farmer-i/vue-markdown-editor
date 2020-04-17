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
        default: 'fullscreen',
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

      Object.entries(toolbars).forEach(([name, toolbar]) => {
        this.registerToolbar(name, toolbar);
      });

      Object.entries(this.toolbar).forEach(([name, toolbar]) => {
        this.registerToolbar(name, toolbar);
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
