import theme from './theme';

const install = function (VMdEditor) {
  VMdEditor.theme(theme);
};

export default {
  ...theme,
  install,
};
