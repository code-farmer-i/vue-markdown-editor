export default function (md) {
  const blockMap = [
    'table_open',
    'blockquote_open',
    'bullet_list_open',
    'ordered_list_open',
    'reference_open',
    'heading_open',
    'lheading_open',
    'html_block_open',
    'paragraph_open',
    'hr',
  ];

  const lineMarkup = 'data-v-md-line';

  const defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  function renderLineWrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const token = tokens[idx];

      token.attrPush([lineMarkup, token.map[0] + 1]);

      return originalRender(tokens, idx, options, env, self);
    };
  }

  blockMap.forEach((ruleName) => {
    const originalRender = md.renderer.rules[ruleName];
    const render = originalRender || defaultRender;

    md.renderer.rules[ruleName] = renderLineWrapper(render);
  });

  function codeWrapper(original) {
    return function (tokens, idx, options, env, self) {
      const rawCode = original(tokens, idx, options, env, self);
      const token = tokens[idx];
      const lineNumber = token.map[0] + 1;

      if (rawCode.indexOf('extra-attrs') !== -1) {
        return rawCode.replace('extra-attrs', `extra-attrs data-v-md-line="${lineNumber}"`);
      }

      return `<div ${lineMarkup}="${lineNumber}">${rawCode}</div>`;
    };
  }

  const { fence, code_block: codeBlock } = md.renderer.rules;

  md.renderer.rules.code_block = codeWrapper(codeBlock);
  md.renderer.rules.fence = codeWrapper(fence);
}
