import MarkdownIt from 'markdown-it';

export default function (config) {
  const markdownItInstance = new MarkdownIt();

  markdownItInstance.set({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: false,
    typographer: true,
    ...config,
  });

  return markdownItInstance;
}
