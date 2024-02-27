const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin(),

    /* load dotenv */
    new Dotenv({
      path: './.env.production',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  optimization: {
    usedExports: true, // 사용된 내보내기(exports)만을 포함시키는 설정
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
});
