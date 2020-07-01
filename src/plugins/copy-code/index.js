import markdownItCopyCode from '@/utils/markdown-it-copy-code';
import copyToClipboard from 'copy-to-clipboard';
import './copy-code.css';

function isCopyButton (el) {
  return el.classList.contains('v-md-copy-code-btn');
}

function findCodeWrapperEl (el) {
  if (el.classList.contains('v-md-pre-wrapper')) {
    return el;
  }

  return findCodeWrapperEl(el.parentNode);
}

function handleClick ({ target }) {
  if (isCopyButton(target)) {
    const codeWrapper = findCodeWrapperEl(target.parentNode);

    if (codeWrapper) {
      const code = codeWrapper.querySelector('code').innerText;

      copyToClipboard(code);
      this.$emit('copy-code-success', code);
    }
  }
}

export default function createCopyCodePlugin() {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItCopyCode);
      });

      if (!VMdEditor.mixins) VMdEditor.mixins = [];

      VMdEditor.mixins.push({
        mounted () {
          const previewEl = document.querySelector('.v-md-editor-preview');

          if (previewEl) {
            previewEl.addEventListener('click', handleClick.bind(this));
          }
        },
        beforeDestroy () {
          const previewEl = document.querySelector('.v-md-editor-preview');

          if (previewEl) {
            previewEl.removeEventListener('click', handleClick.bind(this));
          }
        },
      });
    },
  };
}
