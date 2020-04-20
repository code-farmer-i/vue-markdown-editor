export default function (md) {
  const anchorMarkup = 'data-v-md-anchor';

  const defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  function addAttrwrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      let { content } = tokens[idx + 1];
      content = content
        .split(' ')
        .map((str) => str.toLowerCase())
        .join('-');

      token.attrPush([anchorMarkup, content]);

      return originalRender(tokens, idx, options, env, self);
    };
  }

  const originalRender = md.renderer.rules.heading_open;
  const render = originalRender || defaultRender;
  md.renderer.rules.heading_open = addAttrwrapper(render);
}
