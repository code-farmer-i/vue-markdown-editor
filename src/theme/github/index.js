import theme from './theme';

const install = function (VMdEditor) {
  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.use(install);
}

export default {
  ...theme,
  install,
};
