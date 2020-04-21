export default function (md, options = {}) {
  const { getMarks } = options;

  if (!getMarks) return;

  const defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  function addAttrwrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      const title = tokens[idx + 1].children
        .filter((token) => token.type === 'text' || token.type === 'code_inline')
        .reduce((acc, t) => acc + t.content, '');
      const marks = getMarks(title);

      marks.forEach(({ attr, value }) => {
        token.attrPush([attr, value]);
      });

      return originalRender(tokens, idx, options, env, self);
    };
  }

  const originalRender = md.renderer.rules.heading_open;
  const render = originalRender || defaultRender;
  md.renderer.rules.heading_open = addAttrwrapper(render);
}
