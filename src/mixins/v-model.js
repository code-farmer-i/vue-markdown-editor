export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      text: this.modelValue,
    };
  },
  methods: {
    handleInput(val) {
      this.text = val;
      this.$emit('update:modelValue', val);
    },
  },
};
