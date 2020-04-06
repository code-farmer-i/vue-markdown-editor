const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
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
