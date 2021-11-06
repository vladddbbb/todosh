const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //replace momentJS for antd

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = {
  entry: {
    main: path.resolve(SRC_DIR, 'index.js'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules|fonts/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif|pdf|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, 'index.html'),
      favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': SRC_DIR,
    },
  },
};
