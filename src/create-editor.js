import { commandWrapper } from '@/utils/command';
import { toolbarWrapper } from '@/utils/toolbar';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';

import Preview from '@/preview';

export default function createEditor(component) {
  commandWrapper(component);
  toolbarWrapper(component);

  component.theme = Preview.theme;
  component.extendMarkdown = Preview.extendMarkdown;
  component.mixins.push(toolbarMixin(component));
  component.mixins.push(commandMixin(component));
}
