const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    /* load dotenv */
    new Dotenv({
      path: './.env.development',
    }),

    new ReactRefreshWebpackPlugin(),
  ],

  devServer: {
    open: false,
    hot: true, // HMR(Hot Module Replacement)
    historyApiFallback: true, // HTML5 History API를 사용하는 SPA(Single Page Application)에서의 페이지 전환 설정
    port: 3000,
    liveReload: true,
  },
});
