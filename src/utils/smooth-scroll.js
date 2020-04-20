export default function smoothScroll(target, scrollTop, percent = 10) {
  let currentScrollTop = target.scrollTop;
  const scrollWay = scrollTop > currentScrollTop ? 'down' : 'up';
  const step = (scrollTop - currentScrollTop) * (percent / 100);
  let id;

  const scroll = () => {
    currentScrollTop += step;

    if (
      (scrollWay === 'down' && currentScrollTop >= scrollTop) ||
      (scrollWay === 'up' && currentScrollTop <= scrollTop)
    ) {
      if (target === window) {
        window.scrollTo(window.pageXOffset, scrollTop);
      } else {
        target.scrollTop = scrollTop;
      }

      window.cancelAnimationFrame(id);
    } else {
      target.scrollTop = currentScrollTop;
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
}
