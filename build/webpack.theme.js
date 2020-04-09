const path = require('path');
const merge = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const fs = require('fs-extra');

const themeDir = path.join(__dirname, '../src/theme');
const files = fs.readdirSync(themeDir);

const entry = {};

files.forEach((file) => {
  const themeName = file.replace('.js', '');

  entry[themeName] = `./src/theme/${themeName}.js`;
});

module.exports = merge(getBaseConfig(), {
  mode: 'production',
  entry,
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
