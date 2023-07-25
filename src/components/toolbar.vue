<template>
  <ul v-if="groups.length">
    <template v-for="(group, idx) in groups">
      <toolbar-item
        v-for="toolbarName in group"
        :key="toolbarName"
        :name="toolbarName"
        :title="getConfig(toolbarName, 'title')"
        :icon="getConfig(toolbarName, 'icon')"
        :text="getConfig(toolbarName, 'text')"
        :active="getConfig(toolbarName,'active')"
        :menus="getConfig(toolbarName, 'menus')"
        :disabled-menus="disabledMenus"
        @click="$emit('item-click', toolbars[toolbarName])"
        @menu-click="$emit('toolbar-menu-click', $event)"
      />
      <li
        v-if="idx !== groups.length - 1"
        class="v-md-editor__toolbar-divider"
      />
    </template>
  </ul>
</template>

<script>
import ToolbarItem from '@/components/toolbar-item/index';

export default {
  name: 'editor-toolbar',
  components: {
    [ToolbarItem.name]: ToolbarItem,
  },
  inject: ['markdownEditor'],
  props: {
    groups: Array,
    toolbars: Object,
    disabledMenus: Array,
  },
  emits: ['item-click', 'toolbar-menu-click'],
  methods: {
    getConfig(toolbarName, configName) {
      const toolbarConfig = this.toolbars[toolbarName];
      const value = toolbarConfig[configName];

      return typeof value === 'function' ? value(this.markdownEditor) : value;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  &__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 6px;
    border-bottom: 1px solid $border-color;

    &-left,
    &-right {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &-left + &-right {
      margin-left: 60px;
    }

    &-divider {
      position: relative;
      height: 28px;
      margin: 0 10px;

      + li.v-md-editor__toolbar-item {
        margin-left: 0;
      }

      &::before {
        position: absolute;
        top: 4px;
        bottom: 4px;
        border-left: 1px solid $border-color;
        content: '';
      }
    }
  }
}
</style>
