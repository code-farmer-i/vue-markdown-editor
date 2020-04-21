import { commandWrapper } from '@/utils/command';
import { toolbarWrapper } from '@/utils/toolbar';

// mixins
import commonMixin from '@/mixins/common';
import vModelMixin from '@/mixins/v-model';
import fullscreenMixin from '@/mixins/fullscreen';
import uploadImageMixin from '@/mixins/upload-image';
import syncScrollMixin from '@/mixins/sync-scroll';
import previewAnchorMixin from '@/mixins/preview-anchor';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import tocMixin from '@/mixins/toc';

import Preview from '@/preview';

export default function createEditor(component) {
  commandWrapper(component);
  toolbarWrapper(component);

  component.name = 'v-md-editor';
  component.theme = Preview.theme;
  component.extendMarkdown = Preview.extendMarkdown;
  component.mixins = [
    commonMixin,
    vModelMixin,
    toolbarMixin(component),
    commandMixin(component),
    fullscreenMixin,
    uploadImageMixin,
    syncScrollMixin,
    previewAnchorMixin,
    tocMixin,
  ];
}
