"use strict";

exports.__esModule = true;
exports.default = void 0;
// Modified from https://github.com/ElemeFE/element/blob/dev/src/utils/clickoutside.js

var nodeList = [];
var ctx = '@@clickoutsideContext';
var isServer = typeof window === 'undefined';
var startClick;
var seed = 0;
if (!isServer) {
  document.addEventListener('mousedown', function (e) {
    startClick = e;
  });
  document.addEventListener('mouseup', function (e) {
    nodeList.forEach(function (node) {
      return node[ctx].documentHandler(e, startClick);
    });
  });
}
function createDocumentHandler(el, binding, vnode) {
  return function (mouseup, mousedown) {
    if (mouseup === void 0) {
      mouseup = {};
    }
    if (mousedown === void 0) {
      mousedown = {};
    }
    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target) {
      return;
    }
    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}
var _default = {
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;
    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};
exports.default = _default;