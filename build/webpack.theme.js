const path = require('path');
const merge = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(getBaseConfig(), {
  mode: 'production',
  entry: {
    base: './src/theme/base/base',
    hljs: './src/theme/base/highlight',
    prism: './src/theme/base/prism',
    github: './src/theme/github/index',
    vuepress: './src/theme/vuepress/index',
  },
  output: {
    library: 'VMdTheme',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.join(__dirname, '../lib/theme'),
    umdNamedDefine: true,
    filename: '[name].js',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  optimization: {
    minimize: true,
  },
  plugins: [new CleanWebpackPlugin()],
});
