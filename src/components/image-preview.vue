<template>
  <transition
    name="viewer-fade"
    appear
  >
    <div
      tabindex="-1"
      ref="v-md-viewer__wrapper"
      class="v-md-viewer__wrapper"
      :style="{ 'z-index': zIndex }"
    >
      <div
        class="v-md-viewer__mask"
        @click="hide"
      />
      <!-- ACTIONS -->
      <div class="v-md-viewer__btn v-md-viewer__actions">
        <div class="v-md-viewer__actions__inner">
          <i
            class="v-md-icon-zoom-out"
            @click="handleActions('zoomOut')"
          />
          <i
            class="v-md-icon-zoom-in"
            @click="handleActions('zoomIn')"
          />
          <i
            class="v-md-icon-refresh-left"
            @click="handleActions('anticlocelise')"
          />
          <i
            class="v-md-icon-refresh-right"
            @click="handleActions('clocelise')"
          />
        </div>
      </div>
      <!-- CANVAS -->
      <div class="v-md-viewer__canvas">
        <img
          ref="img"
          class="v-md-viewer__img"
          :src="src"
          :style="imgStyle"
          @load="handleImgLoad"
          @error="handleImgError"
          @mousedown="handleMouseDown"
        />
      </div>
    </div>
  </transition>
</template>

<script>
// Modifred from https://github.com/ElemeFE/element/blob/dev/packages/image/src/image-viewer.vue
const isFirefox = function() {
  return window !== undefined && !!window.navigator.userAgent.match(/firefox/i);
};

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';

let prevOverflow = '';

export default {
  name: 'v-md-image-preview',
  props: {
    src: String,
    zIndex: {
      type: Number,
      default: 2000,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      isShow: false,
      infinite: true,
      loading: false,
      transform: {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      },
    };
  },
  computed: {
    imgStyle() {
      const { scale, deg, offsetX, offsetY, enableTransition } = this.transform;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        'margin-left': `${offsetX}px`,
        'margin-top': `${offsetY}px`,
        maxWidth: '100%',
        maxHeight: '100%',
      };
      return style;
    },
  },
  mounted() {
    this.deviceSupportInstall();
    // add tabindex then wrapper can be focusable via Javascript
    // focus wrapper so arrow key can't cause inner scroll behavior underneath
    this.$refs['v-md-viewer__wrapper'].focus();

    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.body.style.overflow = prevOverflow;
  },
  methods: {
    hide() {
      this.deviceSupportUninstall();
      this.onClose();
    },
    deviceSupportInstall() {
      this.keyDownHandler = e => {
        const { keyCode } = e;
        switch (keyCode) {
          // UP_ARROW
          case 38:
            this.handleActions('zoomIn');
            break;
          // DOWN_ARROW
          case 40:
            this.handleActions('zoomOut');
            break;
        }
      };
      this.mouseWheelHandler = e => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (delta > 0) {
          this.handleActions('zoomIn', {
            zoomRate: 0.015,
            enableTransition: false,
          });
        } else {
          this.handleActions('zoomOut', {
            zoomRate: 0.015,
            enableTransition: false,
          });
        }
      };
      document.addEventListener('keydown', this.keyDownHandler);
      document.addEventListener(mousewheelEventName, this.mouseWheelHandler);
    },
    deviceSupportUninstall() {
      document.removeEventListener('keydown', this.keyDownHandler);
      document.removeEventListener(mousewheelEventName, this.mouseWheelHandler);
      this.keyDownHandler = null;
      this.mouseWheelHandler = null;
    },
    handleImgLoad() {
      this.loading = false;
    },
    handleImgError(e) {
      this.loading = false;
      e.target.alt = '加载失败';
    },
    handleMouseDown(e) {
      if (this.loading || e.button !== 0) return;

      const { offsetX, offsetY } = this.transform;
      const startX = e.pageX;
      const startY = e.pageY;
      this.dragHandler = ev => {
        this.transform.offsetX = offsetX + ev.pageX - startX;
        this.transform.offsetY = offsetY + ev.pageY - startY;
      };
      document.addEventListener('mousemove', this.dragHandler);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', this.dragHandler);
      });

      e.preventDefault();
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      };
    },
    handleActions(action, options = {}) {
      if (this.loading) return;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      };
      const { transform } = this;
      switch (action) {
        case 'zoomOut':
          if (transform.scale > 0.2) {
            transform.scale = parseFloat((transform.scale - zoomRate).toFixed(3));
          }
          break;
        case 'zoomIn':
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3));
          break;
        case 'clocelise':
          transform.deg += rotateDeg;
          break;
        case 'anticlocelise':
          transform.deg -= rotateDeg;
          break;
      }
      transform.enableTransition = enableTransition;
    },
  },
};
</script>

<style lang="scss">
.v-md-viewer {
  &__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__canvas {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__btn {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 50%;
    opacity: 0.8;
    user-select: none;
  }

  &__actions {
    bottom: 30px;
    left: 50%;
    width: 242px;
    height: 44px;
    padding: 0 23px;
    background-color: #606266;
    border-color: #fff;
    border-radius: 22px;
    transform: translateX(-50%);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 23px;
      text-align: justify;

      i {
        font-size: 22px;
        cursor: pointer;
      }
    }
  }

  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }
}

.viewer-fade-enter-active {
  animation: viewer-fade-in 0.3s;
}

.viewer-fade-leave-active {
  animation: viewer-fade-out 0.3s;
}

@keyframes viewer-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes viewer-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
