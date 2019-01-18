const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      Path.resolve(__dirname, '../src/index.js'),
    ],
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: Path.resolve(__dirname, '..') }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
