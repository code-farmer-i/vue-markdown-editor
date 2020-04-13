import { commandWrapper } from '@/utils/command';
import { toolbarWrapper } from '@/utils/toolbar';

import Preview from '@/preview';

export default function createEditor(component) {
  commandWrapper(component);
  toolbarWrapper(component);

  component.theme = Preview.theme;
  component.extendMarkdown = Preview.extendMarkdown;
}
