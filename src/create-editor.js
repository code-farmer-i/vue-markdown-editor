import Lang from '@/lang/';
import zhCNConfig from '@/lang/zh-CN';

import { commandWrapper } from '@/utils/command';
import { toolbarWrapper } from '@/utils/toolbar';

// mixins
import commonMixin from '@/mixins/common';
import vModelMixin from '@/mixins/v-model';
import fullscreenMixin from '@/mixins/fullscreen';
import uploadImageMixin from '@/mixins/upload-image';
import syncScrollMixin from '@/mixins/sync-scroll';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import tocMixin from '@/mixins/toc';
import scrollMixin from '@/mixins/scroll';
import hotkeysMixin from '@/mixins/hotkeys';
import listMixin from '@/mixins/list';
import langMixin from '@/mixins/lang';

import Preview from '@/preview';

Lang.add({
  'zh-CN': zhCNConfig,
});

export default function createEditor(component) {
  commandWrapper(component);
  toolbarWrapper(component);

  component.name = 'v-md-editor';
  component.theme = function (themeConfig) {
    component.themeConfig = themeConfig;
    Preview.theme(themeConfig);
  };
  component.extendMarkdown = Preview.extendMarkdown;
  component.hotkeys = [];
  component.hotkey = function (config) {
    component.hotkeys.push(config);
  };
  component.mixins = [
    commonMixin,
    vModelMixin,
    toolbarMixin(component),
    commandMixin(component),
    hotkeysMixin(component),
    fullscreenMixin,
    uploadImageMixin,
    syncScrollMixin,
    tocMixin,
    scrollMixin,
    listMixin,
    langMixin,
  ];
}
