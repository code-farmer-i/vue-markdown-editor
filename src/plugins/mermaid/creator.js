import parser from './parser';
import { deepAssign } from '@/utils/deep-assign';
import { inBrowser } from '@/utils/util';

function getPreviewEl(el) {
  const previewElClass = 'v-md-editor-preview';

  return el.classList.contains(previewElClass) ? el : el.querySelector(`.${previewElClass}`);
}

export default function creator(mermaid) {
  async function handleMdChange() {
    if (!inBrowser) return;

    await this.$nextTick();

    const previewEl = getPreviewEl(this.$el);
    const eles = previewEl.querySelectorAll('.v-md-mermaid');

    if (!eles.length) return;

    mermaid.run({
      nodes: eles,
    });
  }

  return function createMermaidPlugin({ mermaidInitializeOptions = {} } = {}) {
    const initialize = {
      altFontFamily: 'sans-serif',
      flowchart: {
        htmlLabels: true,
        useMaxWidth: true,
      },
      fontFamily: 'sans-serif',
      gantt: {
        leftPadding: 75,
        rightPadding: 20,
      },
      securityLevel: 'loose',
      sequence: {
        boxMargin: 8,
        diagramMarginX: 8,
        diagramMarginY: 8,
        useMaxWidth: true,
      },
      startOnLoad: false,
    };

    deepAssign(initialize, mermaidInitializeOptions);

    return {
      install(VMdEditor) {
        VMdEditor.vMdParser.use(parser);

        if (!VMdEditor.mixins) VMdEditor.mixins = [];

        const mixin = {
          created() {
            mermaid.initialize(initialize);
          },
          watch: {
            html: {
              immediate: true,
              handler: handleMdChange,
            },
          },
        };

        if (VMdEditor.name === 'v-md-editor') {
          VMdEditor.Preview.mixins.push(mixin);
        } else {
          VMdEditor.mixins.push(mixin);
        }
      },
    };
  };
}
