"use strict";

exports.__esModule = true;
exports.tags = exports.prefixAttrWhiteList = exports.attrWhiteList = void 0;
var attrWhiteList = ['style', 'align', 'class', 'id'];
exports.attrWhiteList = attrWhiteList;
var prefixAttrWhiteList = ['data-'];
exports.prefixAttrWhiteList = prefixAttrWhiteList;
var tags = {
  input: ['type'],
  ol: ['reversed', 'start', 'type'],
  button: ['type'],
  summary: []
};
exports.tags = tags;