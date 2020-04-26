<template>
  <transition name="v-md-fade-in">
    <div
      v-show="visible"
      :style="{
        left: `${position.x}px`,
        top: `${position.y}px`
      }"
      class="v-md-editor__tooltip"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-md-tooltip',
  props: {
    text: String,
  },
  data () {
    return {
      position: {
        x: 0,
        y: 0,
      },
      visible: false,
    };
  },
  methods: {
    show (position) {
      this.position = {
        x: position.x,
        y: position.y,
      };

      this.visible = true;

      this.$nextTick(this.calculateLayout);
    },
    hide () {
      this.visible = false;
    },
    calculateLayout () {
      // 容器右边框距离可视区域左侧的距离
      const { right } = this.$el.getBoundingClientRect();
      const windowWidth = document.documentElement.clientWidth;

      if (windowWidth - right < 0) {
        this.position.x -= (right - windowWidth);
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

.v-md-editor {
  &__tooltip {
    position: absolute;
    z-index: $tooltip-z-index;
    padding: $tooltip-padding;
    color: $tooltip-color;
    font-size: $tooltip-font-size;
    line-height: 1;
    white-space: nowrap;
    background-color: $tooltip-background;
    border-radius: $tooltip-border-radius;
    box-shadow: $box-shadow-light;
  }
}
</style>
