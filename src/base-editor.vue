<template>
  <v-md-container
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :disabled-menus="disabledMenus"
    :height="height"
    :fullscreen="fullscreen"
    :left-area-visible="tocVisible"
    left-area-title="目录导航"
    :mode="mode"
    @editor-wrapper-click="handleEditorWrapperClick"
    @toolbar-item-click="handleToolbarItemClick"
    @toolbar-menu-click="handleToolbarMenuClick"
    ref="contaner"
  >
    <scrollbar slot="left-area">
      <toc-nav
        :titles="titles"
        @nav-click="handleNavClick"
      />
    </scrollbar>
    <scrollbar
      slot="editor"
      @scroll="handleEditorScroll"
      ref="editorScroller"
    >
      <v-md-textarea-editor
        :value="text"
        @input="handleInput"
        @click.native.stop
        ref="editorEgine"
      />
    </scrollbar>
    <scrollbar
      slot="preview"
      :disabled="isPreviewMode"
      ref="previewScroller"
    >
      <v-md-preview
        :text="text"
        :scroll-container="getPreviewScrollContainer"
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
import TextareaEditor from '@/components/textarea-editor';

import createEditor from './create-editor';

const component = {
  components: {
    [TextareaEditor.name]: TextareaEditor,
  },
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
    // Must implement
    delLineLeft () {
      const { start } = this.editorEgine.getRange();

      const leftText = this.getCursorLineLeftText();
      this.editorEgine.setRange({ start: start - leftText.length - 1, end: start });
      this.replaceSelectionText('\n');
    },
    // Must implement
    getCursorLineLeftText () {
      const { start, end } = this.editorEgine.getRange();

      return start === end ? this.text.slice(0, start).split('\n').pop() : null;
    },
    // Must implement
    editorRegisterHotkeys (...arg) {
      this.$refs.editorEgine.registerHotkeys(...arg);
    },
    // Must implement
    editorScrollToTop (scrollTop) {
      this.$refs.editorScroller.scrollTo(scrollTop);
    },
    // Must implement
    getScrollInfo () {
      return this.$refs.editorScroller.getScrollInfo();
    },
    // Must implement
    heightAtLine (...arg) {
      return this.editorEgine.heightAtLine(...arg);
    },
    // Must implement
    focus() {
      this.editorEgine.focus();
    },
    // Must implement
    undo() {
      this.editorEgine.undo();
    },
    // Must implement
    redo() {
      this.editorEgine.redo();
    },
    // Must implement
    clear() {
      this.focus();

      this.handleInput('');
    },
    // Must implement
    replaceSelectionText(text) {
      this.editorEgine.insertText(text);
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
