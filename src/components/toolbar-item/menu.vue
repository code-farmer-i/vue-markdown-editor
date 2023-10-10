<template>
  <transition name="v-md-zoom-in-top">
    <ul
      class="v-md-editor__menu"
      :class="[`v-md-editor__menu--${mode}`]"
      :style="style"
      v-show="visible"
      @mousemove.stop
      @click.stop
    >
      <template v-if="isListMode">
        <li
          v-for="item in menus"
          :key="item.name"
          class="v-md-editor__menu-item"
          :class="[`v-md-editor__menu-item-${item.name}`, item.class]"
          @click.stop="handleClick(item)"
        >
          <v-md-render
            :render="item.render"
            v-if="item.render"
          />
          <template v-else>
            {{ getText(item.text) }}
          </template>
        </li>
      </template>
      <template v-else>
        <li>
          <div
            v-for="rowIndex in rowCount"
            class="v-md-editor__menu-row"
          >
            <span
              v-for="item in getRowMenus(rowIndex)"
              :key="item.name"
              :style="{
                width: itemWidth
              }"
              class="v-md-editor__menu-item"
              :class="[`v-md-editor__menu-item-${item.name}`, item.class]"
              @click.stop="handleClick(item)"
            >{{ item.text }}</span>
          </div>
        </li>
      </template>
    </ul>
  </transition>
</template>

<script>
import VMdRender from '@/components/render';
import MENU_MODE from '@/utils/constants/menu-mode';

export default {
  name: 'v-md-menu',
  components: {
    VMdRender,
  },
  inject: ['markdownEditor'],
  props: {
    mode: {
      type: String,
      default: MENU_MODE.PANEL,
    },
    menus: Array,
    itemWidth: {
      type: String,
      default: '30px',
    },
    rowNum: {
      type: Number,
      default: 10,
    },
    visible: Boolean,
  },
  emits: ['update:visible', 'item-click'],
  data() {
    return {
      style: {
        left: 0,
      },
    };
  },
  computed: {
    rowCount() {
      return Math.ceil(this.menus.length / this.rowNum);
    },
    isListMode() {
      return this.mode === MENU_MODE.LIST;
    },
  },
  watch: {
    visible() {
      if (this.visible) this.$nextTick(this.calculateLayout);
    },
  },
  methods: {
    calculateLayout() {
      // 容器右边框距离可视区域左侧的距离
      const { right } = this.$el.getBoundingClientRect();
      const windowWidth = document.documentElement.clientWidth;

      if (windowWidth - right < 0) this.style = { right: 0 };
    },
    getRowMenus(rowIndex) {
      const end = rowIndex * this.rowNum;
      const start = end - this.rowNum;

      return this.menus.slice(start, end);
    },
    getText(text) {
      if (typeof text === 'function') {
        return text(this.markdownEditor);
      }

      return text;
    },
    hide() {
      this.$emit('update:visible', false);
    },
    handleClick(item) {
      this.$emit('item-click', item);

      this.hide();
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/var';
@import '@/styles/mixins';

.v-md-editor {
  &__menu {
    position: absolute;
    top: 38px;
    z-index: 99;
    list-style: none;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: $box-shadow-light;
    transform-origin: center top;

    @include scrollbar-style;

    &-item {
      color: $toolbar-text-color;
      font-weight: normal;
      font-size: $menu-font-size;
      white-space: nowrap;
      list-style: none;

      &:hover {
        background-color: $toolbar-hover-background;
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
      max-height: 200px;
      padding: 12px 10px;
      overflow-y: auto;

      .v-md-editor__menu-row {
        display: flex;
        flex-wrap: nowrap;

        &:not(:last-child) {
          margin-bottom: 6px;
        }
      }

      .v-md-editor__menu-item {
        display: inline-block;
        padding: 8px 0;
        line-height: 1;
        text-align: center;
        border-radius: 2px;

        &:not(:last-child) {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
