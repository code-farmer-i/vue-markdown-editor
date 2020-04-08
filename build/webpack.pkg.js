const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const { entryFiles } = require('./build-entry');

const entry = {};

entryFiles.forEach((fileName) => {
  entry[fileName] = `./src/${fileName}.js`;
});

module.exports = merge(config, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  entry,
  output: {
    library: 'VMdEditor',
    libraryTarget: 'umd',
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
});
