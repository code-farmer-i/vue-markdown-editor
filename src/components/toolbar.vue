<template>
  <ul>
    <template v-for="(group, idx) in groups">
      <li
        v-for="toolbarName in group"
        class="vue-markdown-editor__toolbar-item"
        :class="[toolbars[toolbarName].icon]"
        :title="[toolbars[toolbarName].title]"
        @mousedown.prevent
        @click="$emit('item-click', toolbars[toolbarName])"
      >
        {{ toolbars[toolbarName].text }}
      </li>
      <li
        v-if="idx !== groups.length - 1"
        class="vue-markdown-editor__toolbar-divider"
      />
    </template>
  </ul>
</template>

<script>
export default {
  name: 'EditorToolbar',
  props: {
    groups: Array,
    toolbars: Object,
  },
};
</script>
