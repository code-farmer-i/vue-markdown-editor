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
          ['/examples/theme-demo', '主题'],
        ],
      },
      ['/quick-start', '快速上手'],
      ['/api', 'API'],
      {
        title: '扩展',
        collapsable: false,
        children: [
          ['/extend/theme', '基于现有的主题扩展'],
          ['/extend/toolbar', '自定义工具栏'],
        ],
      },
      ['/changelog', '更新日志'],
    ],
  },
};
