// Refrence https://github.com/Oktavilla/markdown-it-table-of-contents/blob/master/index.js

/* eslint-disable */
const defaults = {
  includeLevel: [2, 3],
  containerClass: 'table-of-contents',
  listClass: 'table-of-content-list',
  listItemClass: 'table-of-content-list-item',
  markerPattern: /^\[\[toc\]\]/im,
  listType: 'ul',
  getAnchorAttrs: () => [],
  format: undefined,
  forceFullToc: false,
  containerHeaderHtml: undefined,
  containerFooterHtml: undefined,
  transformLink: undefined,
};

export default function (md, o) {
  const options = { ...defaults, ...o };
  const tocRegexp = options.markerPattern;
  let gstate;

  function toc(state, silent) {
    let token;
    let match;

    // Reject if the token does not start with [
    if (state.src.charCodeAt(state.pos) !== 0x5b /* [ */) {
      return false;
    }
    // Don't run any pairs in validation mode
    if (silent) {
      return false;
    }

    // Detect TOC markdown
    match = tocRegexp.exec(state.src.substr(state.pos));
    match = !match ? [] : match.filter((m) => m);
    if (match.length < 1) {
      return false;
    }

    // Build content
    token = state.push('toc_open', 'toc', 1);
    token.markup = '[[toc]]';
    token = state.push('toc_body', '', 0);
    token = state.push('toc_close', 'toc', -1);

    // Update pos so the parser can continue
    const newline = state.src.indexOf('\n', state.pos);
    if (newline !== -1) {
      state.pos = newline;
    } else {
      state.pos = state.pos + state.posMax + 1;
    }

    return true;
  }

  md.renderer.rules.toc_open = function (tokens, index) {
    let tocOpenHtml = `<div class="${options.containerClass}">`;

    if (options.containerHeaderHtml) {
      tocOpenHtml += options.containerHeaderHtml;
    }

    return tocOpenHtml;
  };

  md.renderer.rules.toc_close = function (tokens, index) {
    let tocFooterHtml = '';

    if (options.containerFooterHtml) {
      tocFooterHtml = options.containerFooterHtml;
    }

    return tocFooterHtml + '</div>';
  };

  md.renderer.rules.toc_body = function (tokens, index) {
    if (options.forceFullToc) {
      let tocBody = '';
      let pos = 0;
      const tokenLength = gstate && gstate.tokens && gstate.tokens.length;

      while (pos < tokenLength) {
        const tocHierarchy = renderChildsTokens(pos, gstate.tokens);
        pos = tocHierarchy[0];
        tocBody += tocHierarchy[1];
      }

      return tocBody;
    }
    return renderChildsTokens(0, gstate.tokens)[1];
  };

  function renderChildsTokens(pos, tokens) {
    const headings = [];
    let buffer = '';
    let currentLevel;
    let subHeadings;
    const size = tokens.length;
    let i = pos;
    while (i < size) {
      const token = tokens[i];
      const heading = tokens[i - 1];
      const level = token.tag && parseInt(token.tag.substr(1, 1));
      if (
        token.type !== 'heading_close' ||
        options.includeLevel.indexOf(level) == -1 ||
        heading.type !== 'inline'
      ) {
        i++;
        continue; // Skip if not matching criteria
      }
      if (!currentLevel) {
        currentLevel = level; // We init with the first found level
      } else {
        if (level > currentLevel) {
          subHeadings = renderChildsTokens(i, tokens);
          buffer += subHeadings[1];
          i = subHeadings[0];
          continue;
        }
        if (level < currentLevel) {
          // Finishing the sub headings
          buffer += '</li>';
          headings.push(buffer);
          return [
            i,
            `<${options.listType} class="${options.listClass}">${headings.join('')}</${
              options.listType
            }>`,
          ];
        }
        if (level == currentLevel) {
          // Finishing the sub headings
          buffer += '</li>';
          headings.push(buffer);
        }
      }

      const title = heading.children
        .filter((token) => token.type === 'text' || token.type === 'code_inline')
        .reduce((acc, t) => acc + t.content, '');
      const anchorAttrs = options.getAnchorAttrs(title, level);

      buffer = `<li class="${options.listItemClass}">
      <a ${anchorAttrs.map(({ attr, value }) => `${attr}="${value}"`).join(' ')}>`;
      buffer += title;
      buffer += '</a>';
      i++;
    }

    buffer += buffer === '' ? '' : '</li>';
    headings.push(buffer);

    return [
      i,
      `<${options.listType} class="${options.listClass}">${headings.join('')}</${
        options.listType
      }>`,
    ];
  }

  // Catch all the tokens for iteration later
  md.core.ruler.push('grab_state', (state) => {
    gstate = state;
  });

  // Insert TOC
  md.inline.ruler.after('emphasis', 'toc', toc);
}
