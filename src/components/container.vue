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
        @item-click="handleToolbarItemClick"
      />
      <editor-toolbar
        class="v-md-editor__toolbar-right"
        :groups="rightToolbarGroup"
        :toolbars="toolbars"
        @item-click="handleToolbarItemClick"
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
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar';

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
  methods: {
    getToolbarConfig(toolbarStr) {
      return toolbarStr
        .split('|')
        .map((group) =>
          group
            .split(' ')
            .filter((toolbarName) => toolbarName && this.toolbars[toolbarName])
        );
    },
    handleEditorWrapperClick(e) {
      this.$emit('editor-wrapper-click', e);
    },
    handleToolbarItemClick(toolbar) {
      this.$emit('toolbar-item-click', toolbar);
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 12px 0;

  &--fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__toolbar {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 6px;
    border-bottom: 1px solid #ddd;

    &-left,
    &-right {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &-divider {
      height: 20px;
      margin: 0 10px;
      border-left: 1px solid #ddd;

      + li.v-md-editor__toolbar-item {
        margin-left: 0;
      }
    }

    &-item {
      width: 28px;
      height: 28px;
      color: #757575;
      font-weight: bold;
      font-size: 15px;
      line-height: 28px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s linear 0s;

      &:not(:first-child) {
        margin-left: 4px;
      }

      &:hover,
      &--active {
        color: rgba(0, 0, 0, 0.8);
        background: #e9e9eb;
      }
    }
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
    border-right: 1px solid #ddd;
    cursor: text;
    user-select: none;
  }
}
</style>
