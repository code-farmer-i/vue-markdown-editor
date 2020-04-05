const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  entry: {
    dev: './dev/main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss/,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
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
