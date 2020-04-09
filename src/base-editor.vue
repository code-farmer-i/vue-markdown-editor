<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :height="height"
    :fullscreen="fullscreen"
    @editor-wrapper-click="handleEditorWrapperClick"
    @toolbar-item-click="handleToolbarItemClick"
    ref="contaner"
  >
    <scrollbar slot="editor">
      <v-md-engine
        :value="text"
        @input="handleInput"
        ref="editorEgine"
      />
    </scrollbar>
    <scrollbar slot="preview">
      <v-md-preview
        :text="text"
        :preview-class="previewClass"
        :markdown-loader="markdownLoader"
        @change="handleChange"
        ref="preview"
      />
    </scrollbar>
  </v-md-container>
</template>

<script>
import Engine from '@/components/engine';
import Preview from '@/preview';
import Container from '@/components/container';
import Scrollbar from '@/components/scrollbar/index';

import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';
import insertMixin from '@/mixins/insert';

export default {
  name: 'v-md-editor',
  provide() {
    return {
      markdownEditor: this,
    };
  },
  components: {
    [Engine.name]: Engine,
    [Preview.name]: Preview,
    [Container.name]: Container,
    [Scrollbar.name]: Scrollbar,
  },
  mixins: [toolbarMixin, commandMixin, fullscreenMixin, insertMixin],
  props: {
    value: {
      type: String,
      default: '',
    },
    height: String,
    previewClass: String,
    markdownLoader: Function,
  },
  data() {
    return {
      text: this.value,
    };
  },
  watch: {
    value() {
      this.text = this.value;
    },
  },
  methods: {
    handleInput(val) {
      this.text = val;
      this.$emit('input', val);
    },
    handleChange(text, html) {
      this.$emit('change', text, html);
    },
    handleEditorWrapperClick() {
      this.focus();
    },
    getSelectedStr(text, selectedRange) {
      const { start, end } = selectedRange;

      return end > start ? text.slice(start, end) : null;
    },
    // Must implement
    focus() {
      this.$refs.editorEgine.focus();
    },
    // Must implement
    save() {
      this.$emit('save', this.text, this.$refs.preview.html);
    },
    // Must implement
    undo() {
      this.focus();

      document.execCommand('undo');
    },
    // Must implement
    redo() {
      this.focus();

      document.execCommand('redo');
    },
    // Must implement
    clear() {
      this.focus();

      this.handleInput('');
    },
    // Must implement
    replaceSelectionText(text) {
      this.$refs.editorEgine.setRangeText(text);
    },
    // Must implement
    getCurrentSelectedStr () {
      const { start, end } = this.$refs.editorEgine.getRange();

      return end > start ? this.text.slice(start, end) : null;
    },
    // Must implement
    changeSelctionTo(insertText, selectedText) {
      const { editorEgine } = this.$refs;
      const selectedIndexOfStr = insertText.indexOf(selectedText);
      const cursorEndIndex = editorEgine.getRange().end;

      if (selectedIndexOfStr === -1) return;
      const text = this.text.slice(0, cursorEndIndex);
      const insertTextIndex = text.length - insertText.length;
      const rangeStartIndex = insertTextIndex + selectedIndexOfStr;
      const rangeEndIndex = rangeStartIndex + selectedText.length;

      this.$refs.editorEgine.setRange({
        start: rangeStartIndex,
        end: rangeEndIndex,
      });
    },
  },
};
</script>
