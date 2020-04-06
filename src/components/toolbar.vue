<template>
  <ul>
    <template v-for="(group, idx) in groups">
      <li
        v-for="toolbarName in group"
        class="vue-markdown-editor__toolbar-item"
        :class="[
          getConfig(toolbarName, 'icon'),
          {
            'vue-markdown-editor__toolbar-item--active': getConfig(
              toolbarName,
              'active'
            ),
          },
        ]"
        :title="getConfig(toolbarName, 'title')"
        @mousedown.prevent
        @click="$emit('item-click', toolbars[toolbarName])"
      >{{ getConfig(toolbarName, 'text') }}</li>
      <li
        v-if="idx !== groups.length - 1"
        class="vue-markdown-editor__toolbar-divider"
      />
    </template>
  </ul>
</template>

<script>
export default {
  name: 'editor-toolbar',
  inject: ['markdownEditor'],
  props: {
    groups: Array,
    toolbars: Object,
  },
  methods: {
    getConfig(toolbarName, configName) {
      const toolbarConfig = this.toolbars[toolbarName];
      const value = toolbarConfig[configName];

      return typeof value === 'function' ? value(this.markdownEditor) : value;
    },
  },
};
</script>
