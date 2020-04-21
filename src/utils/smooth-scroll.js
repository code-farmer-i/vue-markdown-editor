import { getScrollTop, scrollTo } from './scroll-top';

export default function smoothScroll(target, scrollTop, percent = 10) {
  let currentScrollTop = getScrollTop(target);
  const scrollWay = scrollTop > currentScrollTop ? 'down' : 'up';
  const step = (scrollTop - currentScrollTop) * (percent / 100);
  let id;

  const scroll = () => {
    currentScrollTop += step;

    if (
      (scrollWay === 'down' && currentScrollTop >= scrollTop) ||
      (scrollWay === 'up' && currentScrollTop <= scrollTop)
    ) {
      scrollTo(target, scrollTop);

      window.cancelAnimationFrame(id);
    } else {
      scrollTo(target, currentScrollTop);
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
}
