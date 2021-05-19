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

      if (openLinkIcon) {
        if (openLinkIconClass) {
          return `<i class="${openLinkIconClass}"></i>` + self.renderToken(tokens, idx, options);
        }

        return (
          // eslint-disable-next-line max-len
          '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>' +
          self.renderToken(tokens, idx, options)
        );
      }
    }
    return self.renderToken(tokens, idx, options);
  };
}
