/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './client/app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json', '.css' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'public')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                '@babel/react',
                '@babel/typescript',
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'public'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development', // enables the HMR feature when in dev env
          },
        },
        'css-loader' ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ],
      },
    ],
  },
};
