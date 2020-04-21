<template>
  <div class="v-md-editor__toc-nav">
    <div
      v-for="item in titles"
      class="v-md-editor__toc-nav-item"
      :style="{
        paddingLeft: `${indent * item.indent}px`
      }"
      @click="$emit('nav-click', item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'toc-nav',
  props: {
    titles: Array,
    indent: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  &__toc-nav {
    &-item {
      white-space: nowrap;
    }
  }
}
</style>
