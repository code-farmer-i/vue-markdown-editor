<template>
  <li
    class="v-md-editor__toolbar-item"
    :class="[
      icon,
      {
        'v-md-editor__toolbar-item--active': active || menuActive
      },
      {
        'v-md-editor__toolbar-item--menu': hasMenu
      }
    ]"
    v-clickoutside="hideMenu"
    @mouseleave="handleHideTooltip"
    @mousemove="handleMousemove"
    @click.stop="handleClick"
  >
    {{ text }}
    <v-md-tooltip
      ref="tooltip"
      :text="title"
    />
    <v-md-menu
      v-if="hasMenu"
      ref="menu"
      :menus="menus"
      :visible.sync="menuActive"
      @item-click="$emit('menu-click', arguments[0])"
    />
    <i
      v-if="hasMenu"
      class="v-md-icon-arrow-down v-md-editor__menu-ctrl"
      ref="menuCtrl"
    />
  </li>
</template>

<script>
import Tooltip from './tooltip';
import Menu from './menu';
import Clickoutside from '@/utils/clickoutside';

export default {
  name: 'toolbar-item',
  directives: { Clickoutside },
  components: {
    [Tooltip.name]: Tooltip,
    [Menu.name]: Menu,
  },
  props: {
    title: String,
    active: Boolean,
    text: String,
    icon: String,
    menus: Array,
  },
  data () {
    return {
      menuActive: false,
    };
  },
  computed: {
    hasMenu () {
      return this.menus?.length;
    },
  },
  methods: {
    hideMenu() {
      if (this.hasMenu) {
        this.menuActive = false;
      }
    },
    showMenu () {
      if (this.hasMenu) {
        this.menuActive = true;
      }
    },
    handleClick() {
      this.$emit('click');
      this.handleHideTooltip();
      this.menuActive ? this.hideMenu() : this.showMenu();
    },
    handleMousemove(e) {
      const selfEl = this.$el;
      const { target } = e;
      const { menuCtrl } = this.$refs;

      if ((target !== selfEl && target !== menuCtrl) || this.menuActive) {
        this.handleHideTooltip();

        return;
      }


      if (this.timmer) clearTimeout(this.timmer);

      const selfElRect = selfEl.getBoundingClientRect();
      const x = e.clientX - selfElRect.left;
      const y = e.clientY - selfElRect.top;

      this.timmer = setTimeout(() => {
        this.$refs.tooltip.show({
          x: x - 2,
          y: y + 20,
        });
      }, 300);
    },
    handleHideTooltip () {
      if (this.timmer) clearTimeout(this.timmer);

      this.$refs.tooltip.hide();
    },
  },
};
</script>

<style lang="scss">
$item-width: 28px;
$item-height: 28px;

.v-md-editor {
  &__menu-ctrl {
    position: absolute;
    left: 22px;
    display: none;
  }

  &__toolbar-item {
    position: relative;
    width: $item-width;
    height: $item-height;
    color: #595959;
    font-size: 16px;
    line-height: $item-height;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s linear 0s;

    &:not(:first-child) {
      margin-left: 4px;
    }

    &:hover {
      background: #f5f5f5;
    }

    &--menu {
      padding-right: 14px;

      .v-md-editor__menu-ctrl {
        display: inline-block;
      }
    }

    &--active {
      background: #e8e8e8;

      &:hover {
        background: #e8e8e8;
      }
    }
  }
}
</style>
