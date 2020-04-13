import theme from './theme';
import createTipPlugin from '@/plugins/tip';

const install = function (VMdEditor) {
  VMdEditor.use(createTipPlugin({ icon: 'v-md-icon-tip' }));

  VMdEditor.theme(theme);
};

if (typeof window !== 'undefined' && window.VMdEditor) {
  window.VMdEditor.use(install);
}

export default {
  install,
};
