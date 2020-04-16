<template>
  <li
    class="v-md-editor__toolbar-item"
    :class="[
      icon,
      {
        'v-md-editor__toolbar-item--active': active
      },
    ]"
    @mousedown.prevent
    @mouseleave="handleHideMenu"
    @mousemove="handleMousemove"
    @click="$emit('click')"
  >
    {{ text }}
    <v-md-tooltip
      ref="tooltip"
      :text="title"
    />
  </li>
</template>

<script>
import Tooltip from './tooltip';

export default {
  name: 'toolbar-item',
  components: {
    [Tooltip.name]: Tooltip,
  },
  props: {
    title: String,
    active: Boolean,
    text: String,
    icon: String,
  },
  methods: {
    handleMousemove(e) {
      const { offsetX, offsetY } = e;

      if (this.timmer) clearTimeout(this.timmer);

      this.timmer = setTimeout(() => {
        this.$refs.tooltip.show({
          x: offsetX - 2,
          y: offsetY + 20,
        });
      }, 300);
    },
    handleHideMenu () {
      if (this.timmer) clearTimeout(this.timmer);
      this.$refs.tooltip.hide();
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  &__toolbar-item {
    position: relative;
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
</style>
