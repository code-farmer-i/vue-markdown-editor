<template>
  <transition name="v-md-zoom-in-top">
    <ul
      class="v-md-editor__menu"
      :class="[`v-md-editor__menu--${mode}`]"
      v-show="visible"
      @mousemove.stop
    >
      <div
        v-for="item in menus"
        :key="item.name"
        class="v-md-editor__menu-item"
        :class="[`v-md-editor__menu-item-${item.name}`]"
        @click.stop="handleClick(item)"
      >
        <v-md-render
          :render="item.render"
          v-if="item.render"
        />
        <template v-else>{{ item.text }}</template>
      </div>
    </ul>
  </transition>
</template>

<script>
import Render from '@/components/render';

export default {
  name: 'v-md-menu',
  components: {
    [Render.name]: Render,
  },
  props: {
    mode: {
      type: String,
      default: 'panel',
    },
    menus: Array,
    visible: Boolean,
  },
  methods: {
    hide() {
      this.$emit('update:visible', false);
    },
    handleClick (item) {
      this.$emit('item-click', item);

      this.hide();
    },
  },
};
</script>

<style lang="scss">
.v-md-editor {
  &__menu {
    position: absolute;
    top: 38px;
    left: 0;
    z-index: 99;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    transform-origin: center top;

    &-item {
      color: #595959;
      font-weight: normal;
      font-size: 14px;
      white-space: nowrap;
      list-style: none;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    &--list {
      padding: 5px 0;

      .v-md-editor__menu-item {
        padding: 0 24px;
        line-height: 34px;
        text-align: left;
      }
    }

    &--panel {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 300px;
      height: 200px;
      padding: 5px;
      overflow-y: auto;

      .v-md-editor__menu-item {
        padding: 0 6px;
        text-align: center;
        border-radius: 2px;

        &:not(:last-child) {
          margin-right: 2px;
        }
      }
    }
  }
}

.v-md-zoom-in-top-enter-active,
.v-md-zoom-in-top-leave-active {
  transform: scaleY(1);
  opacity: 1;
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),
    opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.v-md-zoom-in-top-enter,
.v-md-zoom-in-top-leave-active {
  transform: scaleY(0);
  opacity: 0;
}
</style>
