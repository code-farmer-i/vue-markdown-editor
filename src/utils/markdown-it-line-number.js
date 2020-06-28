export default function (md, { lineMarkup = 'data-line' } = {}) {
  const defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  function addAttrwrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const token = tokens[idx];

      token.attrPush([lineMarkup, token.map[0] + 1]);

      return originalRender(tokens, idx, options, env, self);
    };
  }

  function modifyCodewrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const rawCode = originalRender(tokens, idx, options, env, self);
      const token = tokens[idx];
      const lineNumber = token.map[0] + 1;

      return `<div ${lineMarkup}="${lineNumber}">${rawCode}</div>`;
    };
  }

  const wrapperMap = {
    table_open: addAttrwrapper,
    blockquote_open: addAttrwrapper,
    bullet_list_open: addAttrwrapper,
    ordered_list_open: addAttrwrapper,
    reference_open: addAttrwrapper,
    heading_open: addAttrwrapper,
    lheading_open: addAttrwrapper,
    paragraph_open: addAttrwrapper,
    hr: addAttrwrapper,
    html_block: modifyCodewrapper,
    code_block: modifyCodewrapper,
    fence: modifyCodewrapper,
  };

  Object.keys(wrapperMap).forEach((ruleName) => {
    const originalRender = md.renderer.rules[ruleName];
    const render = originalRender || defaultRender;

    md.renderer.rules[ruleName] = wrapperMap[ruleName](render);
  });
}
