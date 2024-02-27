const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash:8][ext]',
        },
      },
      {
        /* handle fonts */
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html', '**/favicon.ico'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new webpack.ProgressPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
