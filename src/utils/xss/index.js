import xss from 'xss';
import svgTagWhiteList from './svg';
import kaTexWhiteList from './KaTex';
import { attrWhiteList, prefixAttrWhiteList, tags } from './common';

const tagWhiteList = { tags, ...kaTexWhiteList, ...svgTagWhiteList };

Object.keys(tagWhiteList).forEach((tagName) => {
  xss.whiteList[tagName] = tagWhiteList[tagName];
});

const options = {
  onIgnoreTagAttr(tag, name, value) {
    if (
      svgTagWhiteList[tag] ||
      kaTexWhiteList[tag] ||
      attrWhiteList.find((attr) => attr === name) ||
      prefixAttrWhiteList.find((prefix) => name.startsWith(prefix))
    ) {
      return `${name}="${xss.escapeAttrValue(value)}"`;
    }
  },
};

export default new xss.FilterXSS(options);
