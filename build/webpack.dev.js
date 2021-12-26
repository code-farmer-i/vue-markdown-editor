const path = require('path');
const {merge} = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(getBaseConfig(), {
  mode: 'development',
  entry: {
    dev: './dev/main.js',
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    allowedHosts: 'all',
    client: {
      progress: true,
    },
    devMiddleware: {
      stats: 'errors-only',
    },
  },
  output: {
    path: path.join(__dirname, '../dev/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js',
  },
  devtool: 'source-map',
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
