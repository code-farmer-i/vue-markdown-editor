<template>
  <ul class="v-md-editor__toc-nav">
    <li
      v-for="item in titles"
      class="v-md-editor__toc-nav-item"
      :style="{
        paddingLeft: `${indent * (item.indent + 1)}px`
      }"
      @click="$emit('nav-click', item)"
    >
      <span class="v-md-editor__toc-nav-title">{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'toc-nav',
  props: {
    titles: Array,
    indent: {
      type: Number,
      default: 16,
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  &__toc-nav {
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      position: relative;
      overflow: hidden;
      color: $text-color;
      line-height: 27px;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }

    &-title {
      position: relative;

      &::before {
        position: absolute;
        top: 50%;
        left: -16px;
        width: 6px;
        height: 6px;
        background: $text-color;
        border-radius: 50%;
        transform: translateY(-50%);
        content: '';
      }
    }
  }
}
</style>
