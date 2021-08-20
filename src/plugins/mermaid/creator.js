import parser from './parser';
import { deepAssign } from '@/utils/deep-assign';

function getPreviewEl(el) {
  const previewElClass = 'v-md-editor-preview';

  return el.classList.contains(previewElClass) ? el : el.querySelector(`.${previewElClass}`);
}

export default function creator(mermaid) {
  async function handleMdChange() {
    if (typeof window === 'undefined') return;

    await this.$nextTick();

    const previewEl = getPreviewEl(this.$el);
    const eles = previewEl.querySelectorAll('.v-md-mermaid');

    if (!eles.length) return;

    let parseSuccess = false;
    eles.forEach((ele) => {
      try {
        parseSuccess = mermaid.parse(ele.innerText);
      } catch (e) {
        if (!e.str) {
          console.log(e);
        }
      }

      if (parseSuccess) mermaid.init(null, ele);
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
