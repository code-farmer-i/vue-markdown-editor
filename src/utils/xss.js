import xss from 'xss';

xss.whiteList.input = ['type', 'src', 'disabled', 'checked', 'class'];
xss.whiteList.img = ['src', 'alt', 'title', 'width', 'max-width', 'style', 'height'];
xss.whiteList.math = [];
xss.whiteList.semantics = [];
xss.whiteList.mrow = [];
xss.whiteList.mtext = [];
xss.whiteList.annotation = ['encoding'];
xss.whiteList.msub = [];
xss.whiteList.mi = [];
xss.whiteList.mo = [];
xss.whiteList.mn = [];
xss.whiteList.li = ['class'];
xss.whiteList.span = ['class', 'title', 'aria-hidden', 'style'];
xss.whiteList.code = [];
xss.whiteList.li = ['class', 'id'];
xss.whiteList.td = ['style', 'class'];
xss.whiteList.p = ['style', 'class'];
xss.whiteList.div = ['style', 'class'];
xss.whiteList.a = ['style', 'class', 'id', 'target', 'href', 'title'];
xss.whiteList.i = ['class'];
xss.stripIgnoreTag = true;

export default xss;
