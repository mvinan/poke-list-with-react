var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.join(__dirname, 'public');
var APP_DIR = path.join(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    publicPath: "/public",
    path: BUILD_DIR + '/js',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin('../css/style.css', {
        allChunks: true
      })
    ]:[new ExtractTextPlugin('../css/style.css', {
        allChunks: true
      })],
};

module.exports = config;