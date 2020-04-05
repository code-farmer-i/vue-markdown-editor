function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}

export function arraytoObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

export function importAll(map, r) {
  r.keys().forEach((filePath) => {
    map[filePath] = r(filePath);
  });
}
