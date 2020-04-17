<template>
  <div
    class="v-md-editor"
    :class="{ 'v-md-editor--fullscreen': fullscreen }"
    :style="{ height: heightGetter }"
  >
    <div class="v-md-editor__toolbar">
      <editor-toolbar
        class="v-md-editor__toolbar-left"
        :groups="leftToolbarGroup"
        :toolbars="toolbars"
        :disabled-menus="disabledMenus"
        @item-click="handleToolbarItemClick"
        @toolbar-menu-click="handleToolbarMenuClick"
      />
      <editor-toolbar
        class="v-md-editor__toolbar-right"
        :groups="rightToolbarGroup"
        :toolbars="toolbars"
        :disabled-mens="disabledMenus"
        @item-click="handleToolbarItemClick"
        @toolbar-menu-click="handleToolbarMenuClick"
      />
    </div>
    <div class="v-md-editor__main">
      <div
        class="v-md-editor__editor-wrapper"
        @click="handleEditorWrapperClick"
      >
        <slot name="editor" />
      </div>
      <div class="v-md-editor__preview-wrapper">
        <slot name="preview" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar';
import { addResizeListener, removeResizeListener } from '@/utils/resize-event';

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
  },
  mounted() {
    !this.noresize && addResizeListener(this.$el, this.handleContainerResize);
  },

  beforeDestroy() {
    !this.noresize && removeResizeListener(this.$el, this.handleContainerResize);
  },
  methods: {
    handleContainerResize() {
      this.$emit('resize');
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
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: $box-shadow-light;

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
    border-right: 1px solid $border-color;
    cursor: text;
    user-select: none;
  }
}
</style>
