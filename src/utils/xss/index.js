import xss from 'xss';
import svgTagWhiteList from './svg';
import kaTexWhiteList from './KaTex';
import { attrWhiteList, prefixAtteWhiteList, tags } from './common';

const tagWhiteList = { tags, ...kaTexWhiteList, ...svgTagWhiteList };

Object.entries(tagWhiteList).forEach(([tagName, attrWhiteList]) => {
  xss.whiteList[tagName] = attrWhiteList;
});

const options = {
  onIgnoreTagAttr(tag, name, value) {
    if (
      svgTagWhiteList[tag] ||
      kaTexWhiteList[tag] ||
      attrWhiteList.find((attr) => attr === name) ||
      prefixAtteWhiteList.find((prefix) => name.startsWith(prefix))
    ) {
      return `${name}="${xss.escapeAttrValue(value)}"`;
    }
  },
};

export default new xss.FilterXSS(options);
