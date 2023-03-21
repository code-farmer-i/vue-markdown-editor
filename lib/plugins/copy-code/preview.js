"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = createCopyCodePreview;
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
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
  var previewElClass = 'v-md-editor-preview';
  return el.classList.contains(previewElClass) ? el : el.querySelector("." + previewElClass);
}
function createCopyCodePreview() {
  return {
    install: function install(VMdEditor) {
      if (!VMdEditor.mixins) VMdEditor.mixins = [];
      VMdEditor.mixins.push({
        mounted: function mounted() {
          var _this = this;
          this.$nextTick(function () {
            var previewEl = getPreviewEl(_this.$el);
            previewEl.addEventListener('click', _this.handleCopyCodeClick);
          });
        },
        beforeDestroy: function beforeDestroy() {
          var previewEl = getPreviewEl(this.$el);
          previewEl.removeEventListener('click', this.handleCopyCodeClick);
        },
        methods: {
          handleCopyCodeClick: function handleCopyCodeClick(_ref) {
            var target = _ref.target;
            if (isCopyButton(target)) {
              var codeWrapper = findCodeWrapperEl(target.parentNode);
              if (codeWrapper) {
                var code = codeWrapper.querySelector('code').innerText;
                (0, _copyToClipboard.default)(code);
                this.$emit('copy-code-success', code);
              }
            }
          }
        }
      });
    }
  };
}