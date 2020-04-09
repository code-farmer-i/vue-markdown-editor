const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getBaseConfig(config = {}) {
  const backendLoader = config.useCssExtract ? MiniCssExtractPlugin.loader : 'style-loader';

  const defaultConfig = {
    resolve: {
      extensions: ['.js', '.vue', '.css'],
      alias: {
        '@': path.join(__dirname, '../src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.css/,
          sideEffects: true,
          use: [backendLoader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.scss/,
          sideEffects: true,
          use: [backendLoader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false,
                },
              },
            },
          ],
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // enable sub-packages to find babel config
            options: {
              rootMode: 'upward',
            },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            publicPath: '../',
            name: 'fonts/[name].[hash:7].[ext]',
          },
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  };

  if (config.useCssExtract) {
    defaultConfig.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'style/[name].css',
      })
    );
  }

  return defaultConfig;
};
