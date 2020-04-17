<template>
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
    },
    hide () {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  &__tooltip {
    position: absolute;
    z-index: 101;
    padding: 4px 6px;
    color: #fff;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    background-color: #878787;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
