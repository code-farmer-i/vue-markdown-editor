import markdownItContainer from '@/utils/markdown-it-container';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    markdownItContainer(mdParser, {
      type: 'align-left',
      defaultTitle: '',
      before: (info) => `<div align="left">${info || ''}\n`,
      after: () => '</div>\n',
    });

    markdownItContainer(mdParser, {
      type: 'align-center',
      defaultTitle: '',
      before: (info) => `<div align="center">${info || ''}\n`,
      after: () => '</div>\n',
    });

    markdownItContainer(mdParser, {
      type: 'align-right',
      defaultTitle: '',
      before: (info) => `<div align="right">${info || ''}\n`,
      after: () => '</div>\n',
    });
  });
}
