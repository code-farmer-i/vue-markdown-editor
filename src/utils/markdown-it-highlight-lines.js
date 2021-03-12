// Modified from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/highlightLines.js
// It depends on preWrapper plugin.

export default function (md, options = {}) {
  const { fence } = md.renderer.rules;
  const { leftDelimiter = '{', rightDelimiter = '}' } = options;
  const RE = new RegExp(`${leftDelimiter}([\\d,-]+)${rightDelimiter}`);

  md.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args);
    const [tokens, idx] = args;
    const token = tokens[idx];

    if (!token.lineNumbers) {
      const rawInfo = token.info;
      if (!rawInfo || !RE.test(rawInfo)) {
        return fence(...args);
      }

      const langName = rawInfo.replace(RE, '').trim();
      // ensure the next plugin get the correct lang.
      token.info = langName;

      token.lineNumbers = RE.exec(rawInfo)[1]
        .split(',')
        .map((v) => v.split('-').map((v) => parseInt(v, 10)));
    }

    const code = rawCode.slice(rawCode.indexOf('<code>'), rawCode.indexOf('</code>'));
    const highlightLinesCode = code
      .split('\n')
      .map((split, index) => {
        const lineNumber = index + 1;
        const inRange = token.lineNumbers.some(([start, end]) => {
          if (start && end) {
            return lineNumber >= start && lineNumber <= end;
          }
          return lineNumber === start;
        });
        if (inRange) {
          return '<div class="highlighted">&nbsp;</div>';
        }
        return '<br>';
      })
      .join('');

    const highlightLinesWrapperCode = `<div class="highlight-lines">${highlightLinesCode}</div>`;
    const finalCode = rawCode.replace(
      '<!--beforeend-->',
      `${highlightLinesWrapperCode}<!--beforeend-->`
    );

    return finalCode;
  };
}
