// Modified from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/link.js

export default function (md, { externalAttrs, openLinkIcon, openLinkIconClass }) {
  let hasOpenExternalLink = false;

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');

    if (hrefIndex >= 0) {
      const link = token.attrs[hrefIndex];
      const href = link[1];
      const isExternal = /^https?:/.test(href);

      if (isExternal) {
        Object.keys(externalAttrs).forEach((key) => {
          token.attrSet(key, externalAttrs[key]);
        });
        if (/_blank/i.test(externalAttrs.target)) {
          hasOpenExternalLink = true;
        }
      }
    }

    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    if (hasOpenExternalLink) {
      hasOpenExternalLink = false;

      if (openLinkIcon && openLinkIconClass) {
        return `<i class="${openLinkIconClass}"></i>` + self.renderToken(tokens, idx, options);
      }
    }
    return self.renderToken(tokens, idx, options);
  };
}
