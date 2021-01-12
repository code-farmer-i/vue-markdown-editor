import { importAll } from '@/utils/util';

const defaultToolbars = {};
importAll(defaultToolbars, require.context('@/toolbar', false, /\.(js)$/));

export default function registerToolbar(target, name, config) {
  if (name) {
    target[name] = { ...config };
  } else {
    console.error('Toolbar name is required');
  }
}

export function toolbarWrapper(component) {
  component.toolbars = {};

  component.toolbar = function (name, config) {
    registerToolbar(component.toolbars, name, config);
  };

  Object.keys(defaultToolbars).forEach((key) => {
    const module = defaultToolbars[key];
    const { default: config } = module;

    component.toolbar(config.name, config);
  });
}
