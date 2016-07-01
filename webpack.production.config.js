var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(process.env.PWD, 'build'),
    filename: '[name].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name].min.css', {
      publicPath: '/',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css-loader?sourceMap!postcss-loader!sass?sourceMap")
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.join(process.env.PWD, 'src')
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};