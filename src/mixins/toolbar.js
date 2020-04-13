import registerToolbar from '@/utils/toolbar';

export default {
  props: {
    leftToolbar: {
      type: String,
      default:
        'undo redo clear | bold italic strikethrough quote | h1 h2 h3 h4 h5 h6 | ul ol table hr | link image code | save',
    },
    rightToolbar: {
      type: String,
      default: 'fullscreen',
    },
    toolbar: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    const { toolbars } = this.$options;

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
      if (toolbar.action && typeof toolbar.action === 'function') {
        toolbar.action(this, toolbar.state);
      }
    },
  },
};
