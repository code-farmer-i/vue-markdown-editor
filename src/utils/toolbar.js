import { importAll } from '@/utils/util';

const defaultToolbars = {};
importAll(defaultToolbars, require.context('@/toolbar', false, /\.(js)$/));

export default function registerToolbar(target, name, config) {
  if (name) {
    if (!target[name]) {
      target[name] = { ...config };
    } else {
      console.error(`The toolbar name is already in use: ${name}`);
    }
  } else {
    console.error('Toolbar name is required');
  }
}

export function toolbarWrapper(component) {
  component.toolbars = {};

  component.toolbar = function (name, config) {
    registerToolbar(component.toolbars, name, config);
  };

  Object.values(defaultToolbars).forEach((module) => {
    const { default: config } = module;

    component.toolbar(config.name, config);
  });
}
