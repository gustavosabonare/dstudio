const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const commonConfig = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      resolve: { extensions: ['.js', '.jsx'] },
      exclude: [/node_modules/, /dist/],
      query: {
        presets: ['env', 'stage-0', 'react',]
      }
    },
    {
      test: /.(png|jpg|gif)$/,
      use: 'url-loader',
    }]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    }),
  ],

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
}

const serverConfig = ({
  mode: process.env.NODE_ENV,
  entry: ['babel-polyfill', './src/server/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },

  watch: process.env.NODE_ENV === 'development',
  target: 'node',
  externals: [nodeExternals()],

  node: {
    __dirname: false
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      resolve: { extensions: [".css", ".scss"] },
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'sass-loader',
        'resolve-url-loader'
      ]
    }]
  },
})

const frontConfig = ({
  mode: process.env.NODE_ENV,
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
    new webpack.DefinePlugin({
      'process.env.EXTERNAL_CMS_URL': JSON.stringify(process.env.EXTERNAL_CMS_URL),
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [{
      test: /\.s?css$/,
      resolve: { extensions: [".css", ".scss"] },
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'sass-loader',
        'resolve-url-loader'
      ]
    }]
  },
})

module.exports = (env, argv) => merge.smart(
  argv.buildType === "server" ? serverConfig : {},
  argv.buildType === "front" ? frontConfig : {},
  commonConfig,
);
