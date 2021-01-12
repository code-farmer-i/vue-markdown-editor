import creator from './creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.katex) {
  console.error('Please import resources katex from cdn');
}

export default creator(!isServer && window.katex);
