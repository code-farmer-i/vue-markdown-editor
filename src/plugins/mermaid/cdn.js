import creator from './creator';

if (!window.mermaid) {
  console.error('Please import resources mermaid from cdn');
}

export default creator(window.mermaid);
