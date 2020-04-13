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
      <v-md-textarea-editor
        :value="text"
        @input="handleInput"
        @click.native.stop
        ref="editorEgine"
      />
    </scrollbar>
    <scrollbar slot="preview">
      <v-md-preview
        :text="text"
        :theme="theme"
        @change="handleChange"
        ref="preview"
      />
    </scrollbar>
    <v-md-upload-img
      v-if="hasUploadImage"
      :upload-image-config="$attrs['upload-image-config'] || $attrs.uploadImageConfig"
      ref="uploadImage"
    />
  </v-md-container>
</template>

<script>
// mixins
import commonMixin from '@/mixins/common';
import vModelMixin from '@/mixins/v-model';
import toolbarMixin from '@/mixins/toolbar';
import commandMixin from '@/mixins/command';
import fullscreenMixin from '@/mixins/fullscreen';
import uploadImageMixin from '@/mixins/upload-image';

import TextareaEditor from '@/components/textarea-editor';

import createEditor from './create-editor';

const component = {
  name: 'v-md-editor',
  components: {
    [TextareaEditor.name]: TextareaEditor,
  },
  mixins: [
    commonMixin,
    vModelMixin,
    toolbarMixin,
    commandMixin,
    fullscreenMixin,
    uploadImageMixin,
  ],
  computed: {
    editorEgine () {
      return this.$refs.editorEgine;
    },
  },
  watch: {
    value() {
      this.text = this.value;
    },
  },
  methods: {
    handleEditorWrapperClick() {
      this.focus();

      this.editorEgine.setRange({
        start: this.text.length,
        end: this.text.length,
      });
    },
    getSelectedStr(text, selectedRange) {
      const { start, end } = selectedRange;

      return end > start ? text.slice(start, end) : null;
    },
    // Must implement
    focus() {
      this.editorEgine.focus();
    },
    // Must implement
    undo() {
      this.editorEgine.execCommand('undo');
    },
    // Must implement
    redo() {
      this.editorEgine.execCommand('redo');
    },
    // Must implement
    clear() {
      this.focus();

      this.handleInput('');
    },
    // Must implement
    replaceSelectionText(text) {
      this.editorEgine.execCommand('insertText', text);
    },
    // Must implement
    getCurrentSelectedStr () {
      const { start, end } = this.editorEgine.getRange();

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

      this.editorEgine.setRange({
        start: rangeStartIndex,
        end: rangeEndIndex,
      });
    },
  },
};

createEditor(component);

export default component;
</script>
