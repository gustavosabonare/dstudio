const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      resolve: { extensions: ['.js', '.jsx'] },
      exclude: [/node_modules/, /dist/],
      query: {
        presets: ['env', 'react']
      }
    },
    {
      test: /\.s?css$/,
      resolve: { extensions: [".css", ".scss"] },
      use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader']
    },
    {
      test: /.(png|jpg|gif)$/,
      use: 'url-loader',
    }]
  },

  devtool: 'source-map'
}