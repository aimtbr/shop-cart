/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './client/app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    allowedHosts: [
      process.env.HOST,
    ],
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    })
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
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: 'css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ],
      },
    ],
  },
};
