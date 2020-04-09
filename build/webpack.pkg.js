const path = require('path');
const merge = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const { entryFiles } = require('./build-entry');

const entry = {};

entryFiles.forEach((fileName) => {
  entry[fileName] = `./src/${fileName}.js`;
});

module.exports = merge(getBaseConfig({ useCssExtract: true }), {
  mode: 'production',
  entry,
  output: {
    library: 'VMdEditor',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.join(__dirname, '../lib'),
    umdNamedDefine: true,
    filename: '[name].js',
    globalObject: "typeof self !== 'undefined' ? self : this",
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
