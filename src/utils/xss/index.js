import xss from 'xss';
import svgTagWhiteList from './svg';
import kaTexWhiteList from './KaTex';

xss.whiteList.input = ['type'];

const attrWhiteList = ['style', 'align', 'class', 'id'];
const tagWhiteList = [...kaTexWhiteList, ...svgTagWhiteList];

const options = {
  onTagAttr(tag, name, value, isWhiteAttr) {
    if (isWhiteAttr || attrWhiteList.includes(name)) {
      return `${name}="${value}"`;
    }
  },
  onTag(tag, html, { isWhite }) {
    if (isWhite || tagWhiteList.includes(tag)) {
      return html;
    }
  },
};

export default new xss.FilterXSS(options);
