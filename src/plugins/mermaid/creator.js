import markdownItMermaid from '@/utils/markdown-it-mermaid';
import './mermaid.css';
import { deepAssign } from '@/utils/deep-assign';

const extendMarkdown = function (mdParser) {
  if (mdParser) {
    mdParser.use(markdownItMermaid);
  }
};

function getPreviewEl(el) {
  const previewElClass = 'v-md-editor-preview';

  return el.classList.contains(previewElClass) ? el : el.querySelector(`.${previewElClass}`);
}

export default function creator(mermaid) {
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
        VMdEditor.extendMarkdown(extendMarkdown);

        if (!VMdEditor.mixins) VMdEditor.mixins = [];

        VMdEditor.mixins.push({
          created() {
            mermaid.initialize(initialize);
          },
          watch: {
            value: {
              immediate: true,
              async handler() {
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
              },
            },
          },
        });
      },
    };
  };
}
