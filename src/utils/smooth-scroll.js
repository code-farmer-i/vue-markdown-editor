import { getScrollTop, scrollTo } from './scroll-top';

export function smooth({ currentScrollTop, scrollToTop, scrollFn, percent = 10, onScrollEnd }) {
  const scrollWay = scrollToTop > currentScrollTop ? 'down' : 'up';
  const step = (scrollToTop - currentScrollTop) * (percent / 100);
  let id;

  const scroll = () => {
    currentScrollTop += step;

    if (
      (scrollWay === 'down' && currentScrollTop >= scrollToTop) ||
      (scrollWay === 'up' && currentScrollTop <= scrollToTop)
    ) {
      scrollFn(scrollToTop);

      window.cancelAnimationFrame(id);
      if (onScrollEnd) window.requestAnimationFrame(onScrollEnd);
    } else {
      scrollFn(currentScrollTop);
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
}

export default function smoothScroll({ scrollTarget, scrollToTop, percent = 10, onScrollEnd }) {
  const currentScrollTop = getScrollTop(scrollTarget);

  smooth({
    currentScrollTop,
    scrollToTop,
    scrollFn: (scrollTop) => scrollTo(scrollTarget, scrollTop),
    percent,
    onScrollEnd,
  });
}
