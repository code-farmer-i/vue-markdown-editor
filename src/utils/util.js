const { toString } = Object.prototype;

export const isObject = (target) => toString.call(target) === '[object Object]';

function extend(to, _from) {
  Object.keys(_from).forEach((key) => {
    to[key] = _from[key];
  });

  return to;
}

export function arraytoObject(arr) {
  const res = {};
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

export const inBrowser = typeof window !== 'undefined';

export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;

  return reg.test(text);
}

export function generatorText({
  selected,
  InsertGetter,
  selectedGetter = (selected) => selected,
  ignoreEmptyLine = true,
}) {
  let insertContent;
  let newSelected;

  if (selected) {
    newSelected = selectedGetter(selected);
    insertContent = InsertGetter(selected, 1);

    // 如果当前选中的文本包含换行 则插入后选中插入的所有文本
    if (selected.indexOf('\n') !== -1) {
      insertContent = selected
        .split('\n')
        .map((rowText, index) => {
          const isEmptyLine = !rowText;
          if (ignoreEmptyLine && isEmptyLine) return '';

          return InsertGetter(rowText, index + 1).replace(selectedGetter(null), '');
        })
        .join('\n');

      newSelected = insertContent;
    }
  } else {
    insertContent = InsertGetter(null, 1);
    newSelected = selectedGetter(selected);
  }

  return {
    insertContent,
    newSelected,
  };
}
