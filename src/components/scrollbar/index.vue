<script>
import { addResizeListener, removeResizeListener } from '@/utils/resize-event';
import scrollbarWidth from '@/utils/scrollbar-width';
import { arraytoObject } from '@/utils/util';
import Bar from './bar';

export default {
  name: 'scrollbar',

  components: { Bar },

  props: {
    native: Boolean,
    wrapStyle: null,
    wrapClass: null,
    viewClass: null,
    viewStyle: null,
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0,
    };
  },

  computed: {
    wrap() {
      return this.$refs.wrap;
    },
  },

  mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },

  beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  },

  methods: {
    handleScroll() {
      const { wrap } = this;

      this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
      this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth;
    },

    update() {
      const { wrap } = this;
      if (!wrap) return;

      const heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
      const widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    },
  },

  render(h) {
    const gutter = scrollbarWidth();
    let style = this.wrapStyle;

    if (gutter) {
      const gutterWith = `-${gutter}px`;
      const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;

      if (Array.isArray(this.wrapStyle)) {
        style = arraytoObject(this.wrapStyle);
        style.marginRight = gutterWith;
        style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    const view = h(
      this.tag,
      {
        class: ['scrollbar__view', this.viewClass],
        style: this.viewStyle,
        ref: 'resize',
      },
      this.$slots.default
    );
    const wrap = (
      <div
        ref="wrap"
        style={style}
        onScroll={this.handleScroll}
        class={[this.wrapClass, 'scrollbar__wrap', gutter ? '' : 'scrollbar__wrap--hidden-default']}
      >
        {[view]}
      </div>
    );
    let nodes;

    if (!this.native) {
      nodes = [
        wrap,
        <Bar move={this.moveX} size={this.sizeWidth}></Bar>,
        <Bar vertical move={this.moveY} size={this.sizeHeight}></Bar>,
      ];
    } else {
      nodes = [
        <div ref="wrap" class={[this.wrapClass, 'scrollbar__wrap']} style={style}>
          {[view]}
        </div>,
      ];
    }
    return h('div', { class: 'scrollbar' }, nodes);
  },
};
</script>

<style lang="scss">
.scrollbar {
  height: 100%;
  overflow: hidden;

  &:active,
  &:focus,
  &:hover {
    .scrollbar__bar {
      opacity: 1;
    }
  }

  &__wrap {
    height: 100%;
    overflow-x: hidden;

    &--hidden-default {
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }

  &__thumb {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: inherit;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(144, 147, 153, 0.5);
    }
  }

  &__bar {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.34s ease-out;

    &.is-vertical {
      top: 2px;
      width: 6px;

      & > div {
        width: 100%;
      }
    }

    &.is-horizontal {
      left: 2px;
      height: 6px;

      & > div {
        height: 100%;
      }
    }
  }
}
</style>
