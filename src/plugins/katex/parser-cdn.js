import parserCreator from './parser-creator';

if (!window.katex) {
  console.error('Please import resources katex from cdn');
}

export default parserCreator(window.katex);
