const renderFn = function (props, { attrs }) {
  return props.render(...attrs);
};

renderFn.props = ['render'];

export default renderFn;
