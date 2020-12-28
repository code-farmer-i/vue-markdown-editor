module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'v-md-editor',
      description: 'A lightweight markdown editor built on Vue',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'v-md-editor',
      description: 'A lightweight markdown editor built on Vue',
    },
  },
  base: '/vue-markdown-editor/',
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/code-farmer-i/vue-markdown-editor',
          },
        ],
        sidebar: [
          ['/', 'Introduction'],
          ['/question', 'Question'],
          ['/changelog', 'Changelog'],
          ['/Internationalization', 'Internationalization'],
          {
            title: 'Demo',
            collapsable: false,
            children: [
              ['/examples/base-editor', 'Base Editor'],
              ['/examples/codemirror-editor', 'Codemirror Editor'],
              ['/examples/preview-demo', 'Preview Component'],
            ],
          },
          ['/quick-start', 'Quickstart'],
          {
            title: 'Theme',
            collapsable: false,
            children: [
              ['/theme/github', 'Github'],
              ['/theme/vuepress', 'VuePress'],
            ],
          },
          ['/api', 'API'],
          {
            title: 'Advanced Usage',
            collapsable: false,
            children: [
              ['/senior/toolbar', 'Custom Toolbar'],
              ['/senior/upload-image', 'Upload Image'],
              ['/senior/image-size', 'Image Size'],
              ['/senior/code-highlight-extension', 'Code Highlight Extension'],
              ['/senior/toc', 'Toc'],
              ['/senior/anchor', 'Custom Anchor'],
              ['/senior/xss-extend', 'Xss Extension'],
            ],
          },
          {
            title: 'Plugins',
            collapsable: false,
            children: [
              ['/plugins/tip', 'Tip'],
              ['/plugins/emoji', 'Emoji'],
              ['/plugins/katex', 'Katex'],
              ['/plugins/mermaid', 'Mermaid（flowchart）'],
              ['/plugins/todo-list', 'Todo List'],
              ['/plugins/line-number', 'Line Number'],
              ['/plugins/highlight-lines', 'Highlight Lines'],
              ['/plugins/copy-code', 'Copy Code'],
            ],
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/code-farmer-i/vue-markdown-editor',
          },
        ],
        sidebar: [
          ['/zh/', '介绍'],
          ['/zh/question', '常见问题'],
          ['/zh/changelog', '更新日志'],
          ['/zh/Internationalization', '国际化'],
          ['/zh/communication', '交流群'],
          {
            title: '示例',
            collapsable: false,
            children: [
              ['/zh/examples/base-editor', '轻量版'],
              ['/zh/examples/codemirror-editor', '进阶版'],
              ['/zh/examples/preview-demo', '预览组件'],
            ],
          },
          ['/zh/quick-start', '快速上手'],
          {
            title: '主题',
            collapsable: false,
            children: [
              ['/zh/theme/github', 'github 主题'],
              ['/zh/theme/vuepress', 'vuepress 主题'],
            ],
          },
          ['/zh/api', 'API'],
          {
            title: '高级用法',
            collapsable: false,
            children: [
              ['/zh/senior/toolbar', '自定义工具栏'],
              ['/zh/senior/upload-image', '图片上传'],
              ['/zh/senior/image-size', '设置图片大小'],
              ['/zh/senior/code-highlight-extension', '扩展代码高亮的类型'],
              ['/zh/senior/toc', '目录导航'],
              ['/zh/senior/anchor', '自定义锚点'],
              ['/zh/senior/xss-extend', '扩展xss规则'],
            ],
          },
          {
            title: '插件',
            collapsable: false,
            children: [
              ['/zh/plugins/tip', '提示信息'],
              ['/zh/plugins/emoji', 'emoji'],
              ['/zh/plugins/katex', 'katex'],
              ['/zh/plugins/mermaid', 'mermaid（流程图等）'],
              ['/zh/plugins/todo-list', 'todo-list'],
              ['/zh/plugins/line-number', '代码行号'],
              ['/zh/plugins/highlight-lines', '高亮代码行'],
              ['/zh/plugins/copy-code', '快捷复制代码'],
            ],
          },
        ],
      },
    },
  },
};
