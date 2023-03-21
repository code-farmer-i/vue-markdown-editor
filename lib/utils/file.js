"use strict";

exports.__esModule = true;
exports.filesFilter = filesFilter;
exports.getFilesFromClipboardData = getFilesFromClipboardData;
// Modified from https://github.com/ElemeFE/element/blob/dev/packages/upload/src/upload-dragger.vue
function filesFilter(files, config) {
  var accept = config.accept;
  var filesKeys = Object.keys(files).filter(function (key) {
    var file = files[key];
    var type = file.type,
      name = file.name;
    var extension = name.indexOf('.') > -1 ? "." + name.split('.').pop() : '';
    var baseType = type.replace(/\/.*$/, '');
    return accept.split(',').map(function (type) {
      return type.trim();
    }).filter(function (type) {
      return type;
    }).some(function (acceptedType) {
      if (/\..+$/.test(acceptedType)) {
        return extension === acceptedType;
      }
      if (/\/\*$/.test(acceptedType)) {
        return baseType === acceptedType.replace(/\/\*$/, '');
      }

      // eslint-disable-next-line no-useless-escape
      if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
        return type === acceptedType;
      }
      return false;
    });
  });
  return filesKeys.map(function (key) {
    return files[key];
  });
}
function getFilesFromClipboardData(clipboardData) {
  var files = [];
  Object.keys(clipboardData.items).forEach(function (key) {
    var item = clipboardData.items[key];
    if (item.kind === 'file') {
      var file = item.getAsFile();
      if (file) files.push(file);
    }
  });
  return files;
}