import creator from './creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.mermaid) {
  console.error('Please import resources mermaid from cdn');
}

export default creator(!isServer ? window.mermaid : null);
