<template>
  <transition name="v-md-zoom-in-top">
    <ul
      class="v-md-editor__menu"
      :class="[`v-md-editor__menu--${mode}`]"
      v-show="visible"
      @mousemove.stop
      @click.stop
    >
      <template v-if="mode === 'list'">
        <li
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
              :class="[`v-md-editor__menu-item-${item.name}`]"
              @click.stop="handleClick(item)"
            >{{ item.text }}</span>
          </div>
        </li>
      </template>
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
  computed: {
    rowCount () {
      return Math.ceil(this.menus.length / this.rowNum);
    },
  },
  methods: {
    getRowMenus (rowIndex) {
      const end = rowIndex * this.rowNum;
      const start = end - this.rowNum;

      return this.menus.slice(start, end);
    },
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
@import '@/styles/var';
@import '@/styles/mixins';

.v-md-editor {
  &__menu {
    position: absolute;
    top: 38px;
    left: 0;
    z-index: 99;
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
