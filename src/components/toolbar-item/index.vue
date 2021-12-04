<template>
  <li
    class="v-md-editor__toolbar-item"
    :class="[
      !$slots['customIcon'] ? icon : '',
      `v-md-editor__toolbar-item-${name}`,
      {
        'v-md-editor__toolbar-item--active': active || menuActive,
      },
      {
        'v-md-editor__toolbar-item--menu': hasMenu,
      },
    ]"
    v-clickoutside:hideMenu="hideMenu"
    @mousedown="preventNativeClick ? $event.preventDefault() : undefined"
    @mouseleave="handleHideTooltip"
    @mouseenter="showTooltip"
    @click="handleClick"
  >
    {{ text }}
    <slot name="icon" />
    <v-md-tooltip
      ref="tooltip"
      :text="title"
    />
    <v-md-menu
      v-if="hasMenu"
      ref="menu"
      :mode="menuMode"
      :menus="menuItems"
      :item-width="menus.itemWidth"
      :row-num="menus.rowNum"
      :visible="menuActive"
      @update:visible="menuActive = $event"
      @item-click="$emit('menu-click', $event)"
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
import { isObject } from '@/utils/util';
import MENU_MODE from '@/utils/constants/menu-mode';

export default {
  name: 'toolbar-item',
  directives: { Clickoutside },
  components: {
    [Tooltip.name]: Tooltip,
    [Menu.name]: Menu,
  },
  props: {
    name: String,
    title: String,
    active: Boolean,
    text: String,
    icon: String,
    menus: [Array, Object],
    disabledMenus: Array,
    preventNativeClick: {
      type: Boolean,
      default: true,
    }
  },
  emits: ['click', 'menu-click'],
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    hasMenu() {
      return this.menuItems?.length;
    },
    menuItems() {
      const menus = isObject(this.menus) ? this.menus.items : this.menus;

      return menus?.filter(
        ({ name: menuName }) => !this.disabledMenus?.includes(`${this.name}/${menuName}`)
      );
    },
    menuMode() {
      return isObject(this.menus) ? this.menus.mode : MENU_MODE.LIST;
    },
  },
  methods: {
    hideMenu() {
      if (this.hasMenu) {
        this.menuActive = false;
      }
    },
    showMenu() {
      if (this.hasMenu) {
        this.menuActive = true;
      }
    },
    handleClick(e) {
      if(this.preventNativeClick)
        e.stopPropagation();
      this.$emit('click');
      this.menuActive ? this.hideMenu() : this.showMenu();

      if (this.hasMenu) {
        this.handleHideTooltip();
      } else {
        this.showTooltip(e);
      }
    },
    test() {
      console.log("test")
    },
    showTooltip(e) {
      const selfEl = this.$el;
      const { target } = e;
      const { menuCtrl } = this.$refs;

      if ((target !== selfEl && target !== menuCtrl) || this.menuActive) {
        this.handleHideTooltip();

        return;
      }

      if (this.timer) clearTimeout(this.timer);

      const selfElRect = selfEl.getBoundingClientRect();
      const x = e.clientX - selfElRect.left;
      const y = e.clientY - selfElRect.top;

      this.timer = setTimeout(() => {
        this.$refs.tooltip?.show({
          x: x - 2,
          y: y + 20,
        });
      }, 100);
    },
    handleHideTooltip() {
      if (this.timer) clearTimeout(this.timer);

      this.$refs.tooltip.hide();
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';

$item-height: 28px;

.v-md-editor {
  &__menu-ctrl {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
  }

  &__toolbar-item {
    position: relative;
    height: $item-height;
    padding: 0 6px;
    color: $toolbar-text-color;
    font-size: $toolbar-font-size;
    line-height: $item-height;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s linear 0s;

    &:not(:first-child) {
      margin-left: 4px;
    }

    &:hover {
      background: $toolbar-hover-background;
    }

    &--menu {
      padding-right: 16px;

      .v-md-editor__menu-ctrl {
        display: inline-block;
      }
    }

    &--active {
      background: $toolbar-active-background;

      &:hover {
        background: $toolbar-active-background;
      }
    }
  }
}
</style>
