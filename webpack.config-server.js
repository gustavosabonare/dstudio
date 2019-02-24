const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: ['./src/server/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },

  target: 'node',
  externals: [nodeExternals()],

  node: {
    __dirname: false
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
      use: ['css-loader', 'sass-loader', 'resolve-url-loader']
    },
    {
      test: /.(png|jpg|gif)$/,
      use: 'url-loader',
    }]
  },
}