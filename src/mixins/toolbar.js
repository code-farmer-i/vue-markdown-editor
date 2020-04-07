import { importAll } from '@/utils/util';

const defaultToolbars = {};
importAll(defaultToolbars, require.context('@/toolbar', false, /\.(js)$/));

export default {
  props: {
    leftToolbar: {
      type: String,
      default:
        'undo redo clear | bold italic strikethrough quote | h1 h2 h3 h4 h5 h6 | ul ol table | link image code | save',
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
    const toolbars = {};

    Object.values(defaultToolbars).forEach((module) => {
      const { default: config } = module;
      const { name } = config;

      if (name) {
        toolbars[name] = { ...config };
      } else {
        console.error('Missing name attribute');
      }
    });

    Object.entries(this.toolbar).forEach(([name, config]) => {
      toolbars[name] = { ...config };
    });

    this.toolbars = toolbars;
  },
  methods: {
    handleToolbarItemClick(toolbar) {
      if (toolbar.action && typeof toolbar.action === 'function') {
        toolbar.action(this, toolbar.state);
      }
    },
  },
};
