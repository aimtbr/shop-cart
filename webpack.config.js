/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

module.exports = [
  {
    entry: [ 'babel-polyfill', './client/app/index.tsx'],
    mode,
    devtool,
    output: {
      path: path.resolve(__dirname, 'dist', 'public'),
      filename: 'client.js',
      publicPath: '/',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'client'),
      host: 'localhost',
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [ '*', '.ts', '.tsx', '.js', '.json', '.css' ],
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
          include: [
            path.resolve(__dirname, 'client')
          ],
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
              hmr: !isProduction, // enables the HMR feature when in dev env
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
  },
  {
    entry: './api/server.ts',
    mode,
    devtool,
    target: 'node',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, 'api'),
          ],
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/env',
                  '@babel/typescript',
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    },
    node: {
      __dirname: false,
      __filename: false,
    }
  }
];
