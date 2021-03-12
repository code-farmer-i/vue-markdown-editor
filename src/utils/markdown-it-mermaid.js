export default function (md, { className = 'v-md-mermaid' } = {}) {
  const wrap = (wrapped) => (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const rawCode = wrapped(...args);

    if (token.info === 'mermaid') {
      return `<pre class="${className}">${token.content
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</pre>`;
    }

    return rawCode;
  };

  const { fence, code_block: codeBlock } = md.renderer.rules;
  md.renderer.rules.fence = wrap(fence);
  md.renderer.rules.code_block = wrap(codeBlock);
}
