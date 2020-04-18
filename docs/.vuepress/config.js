module.exports = {
  base: '/vue-markdown-editor/',
  title: 'v-md-editor',
  description: 'A lightweight markdown editor built on Vue',
  themeConfig: {
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/code-farmer-i/vue-markdown-editor',
      },
    ],
    sidebar: [
      ['/', '介绍'],
      {
        title: '示例',
        collapsable: false,
        children: [
          ['/examples/base-editor', '轻量版'],
          ['/examples/codemirror-editor', '进阶版'],
          ['/examples/preview-demo', '预览组件'],
        ],
      },
      ['/quick-start', '快速上手'],
      {
        title: '主题',
        collapsable: false,
        children: [
          ['/theme/github', 'github 主题'],
          ['/theme/vuepress', 'vuepress 主题'],
        ],
      },
      ['/api', 'API'],
      {
        title: '高级用法',
        collapsable: false,
        children: [
          ['/senior/toolbar', '自定义工具栏'],
          ['/senior/upload-image', '图片上传'],
        ],
      },
      {
        title: '插件',
        collapsable: false,
        children: [
          ['/plugins/tip', '提示信息'],
          ['/plugins/emoji', 'emoji'],
          ['/plugins/katex', 'katex'],
          ['/plugins/todo-list', 'todo-list'],
        ],
      },
      ['/changelog', '更新日志'],
    ],
  },
};
