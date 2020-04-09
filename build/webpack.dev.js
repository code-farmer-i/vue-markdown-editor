const path = require('path');
const merge = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(getBaseConfig(), {
  entry: {
    dev: './dev/main.js',
  },
  devServer: {
    open: true,
    progress: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    disableHostCheck: true,
  },
  output: {
    path: path.join(__dirname, '../dev/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../dev/index.html'),
      filename: 'index.html',
    }),
  ],
});
