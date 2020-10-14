const renderFn = function (props, { data }) {
  return props.render(...data.$attrs);
};

renderFn.props = ['render'];

export default renderFn;
