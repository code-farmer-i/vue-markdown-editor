<template>
  <ul v-if="groups.length">
    <template v-for="(group, idx) in groups">
      <li
        v-for="toolbarName in group"
        class="v-md-editor__toolbar-item"
        :class="[
          getConfig(toolbarName, 'icon'),
          {
            'v-md-editor__toolbar-item--active': getConfig(
              toolbarName,
              'active'
            ),
          },
        ]"
        :title="getConfig(toolbarName, 'title')"
        @mousedown.prevent
        @click="$emit('item-click', toolbars[toolbarName])"
      >
        {{ getConfig(toolbarName, 'text') }}
      </li>
      <li
        v-if="idx !== groups.length - 1"
        class="v-md-editor__toolbar-divider"
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
