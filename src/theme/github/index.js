import theme from './theme';

const install = function (VMdEditor) {
  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  install(window.VMdEditor);
}

export default {
  ...theme,
  install,
};
