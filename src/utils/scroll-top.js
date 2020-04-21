export function getScrollTop(target) {
  let result = 0;

  if (target === window) {
    result = target.pageYOffset;
  } else if (target) {
    result = target.scrollTop;
  }

  return result;
}

export function scrollTo(target, scrollTop) {
  if (target === window) {
    window.scrollTo(window.pageYOffset, scrollTop);
  } else if (target) {
    target.scrollTop = scrollTop;
  }
}
