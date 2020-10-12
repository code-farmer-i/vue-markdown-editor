export default {
  props: {
    defaultFullscreen: Boolean,
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  watch: {
    fullscreen() {
      this.$emit('fullscreen-change', this.fullscreen);
    },
  },
  mounted() {
    window.addEventListener('keyup', this.handleWindowKeyup, false);

    if (this.defaultFullscreen) {
      this.toggleFullScreen();
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleWindowKeyup, false);
  },
  methods: {
    handleWindowKeyup(e) {
      // esc
      if (e.keyCode === 27 && this.fullscreen) {
        this.toggleFullScreen(false);
      }
    },
    toggleFullScreen(fullscreen = !this.fullscreen) {
      this.fullscreen = fullscreen;
      const { 0: html, 1: body } = document.querySelectorAll('html, body');
      const overflow = this.fullscreen ? 'hidden' : null;

      body.style.overflow = overflow;
      html.style.overflow = overflow;
    },
  },
};
