export default {
  name: 'v-md-render',
  functional: true,
  props: {
    render: Function,
  },
  render(h, { data, props }) {
    return props.render(h, ...data.$attrs);
  },
};
