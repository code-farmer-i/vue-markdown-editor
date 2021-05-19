import copyToClipboard from 'copy-to-clipboard';

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

export default function createCopyCodePreview() {
  return {
    install(VMdEditor) {
      if (!VMdEditor.mixins) VMdEditor.mixins = [];

      VMdEditor.mixins.push({
        emits: ['copy-code-success'],
        mounted() {
          this.$nextTick(() => {
            const previewEl = getPreviewEl(this.$el);

            previewEl.addEventListener('click', this.handleCopyCodeClick);
          });
        },
        beforeUnmount() {
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
