import markdownItCopyCode from '@/utils/markdown-it-copy-code';
import copyToClipboard from 'copy-to-clipboard';
import './copy-code.css';

function isCopyButton(el) {
  return el.classList.contains('v-md-copy-code-btn');
}

function findCodeWrapperEl(el) {
  if (el.classList.contains('v-md-pre-wrapper')) {
    return el;
  }

  return findCodeWrapperEl(el.parentNode);
}

function getPreviewEl(el) {
  const previewElClass = 'v-md-editor-preview';

  return el.classList.contains(previewElClass) ? el : el.querySelector(`.${previewElClass}`);
}

export default function createCopyCodePlugin() {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItCopyCode);
      });

      if (!VMdEditor.mixins) VMdEditor.mixins = [];

      VMdEditor.mixins.push({
        mounted() {
          this.$nextTick(() => {
            const previewEl = getPreviewEl(this.$el);

            previewEl.addEventListener('click', this.handleCopyCodeClick);
          });
        },
        beforeDestroy() {
          const previewEl = getPreviewEl(this.$el);

          previewEl.removeEventListener('click', this.handleCopyCodeClick);
        },
        methods: {
          handleCopyCodeClick({ target }) {
            if (isCopyButton(target)) {
              const codeWrapper = findCodeWrapperEl(target.parentNode);

              if (codeWrapper) {
                const code = codeWrapper.querySelector('code').innerText;

                copyToClipboard(code);
                this.$emit('copy-code-success', code);
              }
            }
          },
        },
      });
    },
  };
}
