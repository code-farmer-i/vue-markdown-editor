// Modified from https://github.com/vuepress/vuepress-community/blob/master/packages/vuepress-plugin-container/src/markdown-it-container.ts

import container from 'markdown-it-container';

function wrapRenderPlaceFunction(func) {
  if (typeof func === 'string') {
    return () => func;
  }
  return func;
}

export default function (
  md,
  {
    validate,
    marker,
    render,
    type,
    before,
    after,
    defaultTitle = type.toUpperCase(),
    blockClass = 'custom-block',
  }
) {
  if (!type) {
    return;
  }

  if (!render) {
    let renderBefore;
    let renderAfter;

    if (before !== undefined && after !== undefined) {
      // user defined
      renderBefore = wrapRenderPlaceFunction(before);
      renderAfter = wrapRenderPlaceFunction(after);
    } else {
      // fallback default
      renderBefore = (info) =>
        `<div class="${blockClass} ${type}">${
          info ? `<p class="${blockClass}-title">${info}</p>` : ''
        }\n`;
      renderAfter = () => '</div>\n';
    }

    render = (tokens, index) => {
      const token = tokens[index];

      let info = token.info.trim().slice(type.length).trim();

      if (!info && defaultTitle) {
        if (typeof defaultTitle === 'function') {
          info = defaultTitle();
        } else {
          info = defaultTitle;
        }
      }

      if (token.nesting === 1) {
        return renderBefore(info);
      }

      return renderAfter(info);
    };
  }

  md.use(container, type, { render, validate, marker });
}
