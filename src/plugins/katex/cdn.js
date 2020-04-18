import creator from './creator';

if (!window.katex) {
  console.error('Please import resources katex from cdn');
}

export default creator(window.katex);
