import markdownItContainer from '@/utils/markdown-it-container';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    const blockClass = 'v-md-plugin-tip';
    const getLangConfig = function () {
      const lang = vMdParser.lang.config;
      const langConfig = lang.langConfig[lang.lang];

      return langConfig;
    };

    markdownItContainer(mdParser, {
      type: 'tip',
      defaultTitle: () => getLangConfig().tip.tip.defaultTitle,
      blockClass,
    });

    markdownItContainer(mdParser, {
      type: 'warning',
      defaultTitle: () => getLangConfig().tip.warning.defaultTitle,
      blockClass,
    });

    markdownItContainer(mdParser, {
      type: 'danger',
      defaultTitle: () => getLangConfig().tip.danger.defaultTitle,
      blockClass,
    });
  });

  vMdParser.lang.add({
    'zh-CN': {
      tip: {
        tip: {
          defaultTitle: '提示',
        },
        warning: {
          defaultTitle: '注意',
        },
        danger: {
          defaultTitle: '警告',
        },
      },
    },
    'en-US': {
      tip: {
        tip: {
          defaultTitle: 'TIP',
        },
        warning: {
          defaultTitle: 'WARNING',
        },
        danger: {
          defaultTitle: 'DANGER',
        },
      },
    },
  });
}
