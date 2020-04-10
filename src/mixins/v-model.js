export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: this.value,
    };
  },
  methods: {
    handleInput(val) {
      this.text = val;
      this.$emit('input', val);
    },
  },
};
