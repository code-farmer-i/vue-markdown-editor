import markdownItKatex from '@/utils/markdown-it-katex';

export default function (katex) {
  return function createKatexPlugin(options) {
    const extendMarkdown = function (mdParser) {
      if (mdParser && katex) {
        mdParser.use(markdownItKatex, {
          ...options,
          katex,
        });
      }
    };

    return {
      install(VMdEditor) {
        VMdEditor.extendMarkdown(extendMarkdown);
      },
    };
  };
}
