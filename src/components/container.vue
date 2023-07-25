<template>
  <div
    class="v-md-editor"
    :class="[
      `v-md-editor--${mode}`,
      {
        'v-md-editor--fullscreen': fullscreen,
        'v-md-editor--left-area-reverse': leftAreaReverse
      }
    ]"
    :style="{ height: heightGetter }"
  >
    <div
      v-show="!isPreviewMode"
      class="v-md-editor__left-area"
      :style="{
        width: leftAreaVisible ? leftAreaWidth : 0,
        borderWidth: leftAreaVisible? '1px' : 0
      }"
    >
      <div
        class="v-md-editor__left-area-title"
        :style="{
          height: `${toolbarHeight}px`,
          lineHeight: `${toolbarHeight}px`,
        }"
      >
        {{ leftAreaTitle }}
      </div>
      <div class="v-md-editor__left-area-body">
        <slot name="left-area" />
      </div>
    </div>
    <div class="v-md-editor__right-area">
      <div
        v-show="!isPreviewMode"
        class="v-md-editor__toolbar"
        ref="toolbarWrapper"
      >
        <div class="v-md-editor__toolbar-left-wrapper">
          <slot name="left-toolbar">
            <editor-toolbar
              class="v-md-editor__toolbar-left"
              :groups="leftToolbarGroup"
              :toolbars="toolbars"
              :disabled-menus="disabledMenus"
              @item-click="handleToolbarItemClick"
              @toolbar-menu-click="handleToolbarMenuClick"
            />
          </slot>
        </div>
        <div class="v-md-editor__toolbar-right-wrapper">
          <slot name="right-toolbar">
            <editor-toolbar
              class="v-md-editor__toolbar-right"
              :groups="rightToolbarGroup"
              :toolbars="toolbars"
              :disabled-mens="disabledMenus"
              @item-click="handleToolbarItemClick"
              @toolbar-menu-click="handleToolbarMenuClick"
            />
          </slot>
        </div>
      </div>
      <div class="v-md-editor__main">
        <div
          ref="editorWrapper"
          class="v-md-editor__editor-wrapper"
          v-show="!isPreviewMode"
          @click="handleEditorWrapperClick"
        >
          <slot name="editor" />
        </div>
        <div
          v-show="!isEditMode"
          class="v-md-editor__preview-wrapper"
          ref="previewWrapper"
        >
          <slot name="preview" />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar';
import { addResizeListener, removeResizeListener } from '@/utils/resize-event';
import EDITOR_MODE from '@/utils/constants/editor-mode';

export default {
  name: 'v-md-container',
  components: {
    [Toolbar.name]: Toolbar,
  },
  props: {
    leftToolbar: String,
    rightToolbar: String,
    toolbars: Object,
    fullscreen: Boolean,
    height: String,
    noresize: Boolean,
    disabledMenus: Array,
    leftAreaVisible: Boolean,
    leftAreaTitle: String,
    leftAreaReverse: Boolean,
    leftAreaWidth: {
      type: String,
      default: '200px',
    },
    mode: {
      type: String,
      default: EDITOR_MODE.EDITABLE,
    },
  },
  emits: ['resize', 'editor-wrapper-click', 'toolbar-item-click', 'toolbar-menu-click'],
  data() {
    return {
      toolbarHeight: 0,
    };
  },
  computed: {
    heightGetter() {
      return this.fullscreen ? 'auto' : this.height;
    },
    leftToolbarGroup() {
      return this.getToolbarConfig(this.leftToolbar);
    },
    rightToolbarGroup() {
      return this.getToolbarConfig(this.rightToolbar);
    },
    isPreviewMode() {
      return this.mode === EDITOR_MODE.PREVIEW;
    },
    isEditMode() {
      return this.mode === EDITOR_MODE.EDIT;
    },
  },
  mounted() {
    if (!this.noresize) {
      addResizeListener(this.$refs.editorWrapper, this.handleResize);
      addResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
    }
  },
  beforeUnmount() {
    if (!this.noresize) {
      removeResizeListener(this.$refs.editorWrapper, this.handleResize);
      removeResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
    }
  },
  methods: {
    handleResize() {
      this.$emit('resize');
    },
    handleToolbarWrapperResize() {
      const { toolbarWrapper } = this.$refs;

      if (toolbarWrapper) this.toolbarHeight = toolbarWrapper.offsetHeight;
    },
    getToolbarConfig(toolbarStr) {
      return toolbarStr
        .split('|')
        .map((group) =>
          group.split(' ').filter((toolbarName) => toolbarName && this.toolbars[toolbarName])
        );
    },
    handleEditorWrapperClick(e) {
      this.$emit('editor-wrapper-click', e);
    },
    handleToolbarItemClick(toolbar) {
      this.$emit('toolbar-item-click', toolbar);
    },
    handleToolbarMenuClick(menu) {
      this.$emit('toolbar-menu-click', menu);
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: $box-shadow-light;

  &__left-area,
  &__right-area {
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  &__left-area {
    height: 100%;
    overflow: hidden;
    border-right: 1px solid $border-color;
    transition: 0.3s;

    &-title {
      position: relative;
      height: 41px;
      padding: 0 14px;
      color: $text-color;
      font-weight: 600;
      font-size: 16px;
      line-height: 41px;
      white-space: nowrap;

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid $border-color;
        content: '';
      }
    }

    &-body {
      flex: 1;
      padding: 8px 14px;
      overflow: hidden;
    }
  }

  &--left-area-reverse {
    flex-direction: row-reverse;
  }

  &--left-area-reverse &__left-area {
    border-right: none;
    border-left: 1px solid $border-color;
  }

  &__right-area {
    flex: 1;
  }

  &--preview {
    box-shadow: none;
  }

  &--fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
  }

  &__main {
    display: flex;
    flex: 1;
    width: 100%;
    overflow: hidden;
  }

  &__editor-wrapper,
  &__preview-wrapper {
    position: relative;
    flex: 1;
    height: 100%;
    overflow: hidden;
  }

  &__editor-wrapper {
    cursor: text;
    user-select: none;
  }

  &--editable &__editor-wrapper {
    border-right: 1px solid $border-color;
  }
}
</style>
